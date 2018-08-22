pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
* @title ERC721 Minter with beneficiary
*
* This contract will allow a user to give ether to a beneficiary,
* and in return, be transferred an ERC721 token with user-specified metadata stored in it.
*
* Token URIs (in the form of an IPFS URI) must be signed by the minterAddress
* to verify that the URI came from the dApp, and not any other arbitrary
* user-generated URI.
*
* To do this, we pack the inputs (_to, _beneficiaryId, _tokenURI, _nonce, msg.value) using keccak256
* on the central service, and then sign that hash with the minter's private key. We then
* split ECDSA signature into it's parameters: v, r, and s, and allow the user to pass those
* values to the contract. The contract then uses the same process to pack those parameters
* using keccak256 and then passes that hash to `ecrecover` to verify the minterAddress is valid.
*
* For more information about this process, I used this as a guide when designing:
* https://programtheblockchain.com/posts/2018/02/17/signing-and-verifying-messages-in-ethereum/
*
* In addition, this contract allows for adding, deactivating, and re-activating of
* beneficiary addresses. The owner can also change the minter address. Any user can query
* for token IDs for a particular address, and token URIs for a particular token ID.
* All of the public-non-view methods are pausable, and only-owner operated where it makes sense to do so.
*
*/
contract Minter is ERC721Token, Ownable, Pausable {
  using SafeMath for uint;

  event BeneficiaryAdded(uint8 beneficiaryId, address addr);
  event BeneficiaryActivated(uint8 beneficiaryId);
  event BeneficiaryDeactivated(uint8 beneficiaryId);

  struct beneficiaryInfo {
    address addr;
    bool isActive;
    uint256 total;
  }

  address public minterAddress;
  mapping(uint8 => beneficiaryInfo) public beneficiaries;
  mapping(uint256 => bool) usedNonces;

  constructor() ERC721Token("MintTokens", "MINT") public {}

  /**
  * @dev Mints a token to an address with a tokenURI
  *      and sends funds to beneficiary specified
  * @param _to address of the future owner of the token
  * @param _beneficiaryId the id in beneficiaryAddresses to send the money to
  * @param _tokenURI token URI for the token metadata
  * @param _nonce nonce for the transaction
  * @param v ECDSA signature parameter
  * @param r ECDSA signature parameter
  * @param s ECDSA signature parameter
  * @return the new token ID
  */
  function mintTo(
    address _to, uint8 _beneficiaryId, string _tokenURI, uint256 _nonce, uint8 v, bytes32 r, bytes32 s
  ) public payable whenNotPaused returns (uint256) {
    require(msg.value > 0);
    require(!usedNonces[_nonce]);
    require(beneficiaries[_beneficiaryId].addr > 0);
    require(beneficiaries[_beneficiaryId].isActive);
    require(verifyMessage(keccak256(abi.encodePacked(_to, _tokenURI, _beneficiaryId, _nonce, msg.value)), v, r, s));
    usedNonces[_nonce] = true;

    uint256 newTokenId = mintToken(_to, _tokenURI);
    transferToBeneficiary(msg.value, _beneficiaryId);

    return newTokenId;
  }

  /**
  * @dev Adds a beneficiary to the mapping
  * @param beneficiaryId the identifier for the beneficiary address
  * @param addr the address of the beneficiary
  */
  function addBeneficiary(uint8 beneficiaryId, address addr) public onlyOwner whenNotPaused {
    require(beneficiaries[beneficiaryId].addr == 0);
    beneficiaries[beneficiaryId] = beneficiaryInfo(addr, true, 0);
    emit BeneficiaryAdded(beneficiaryId, addr);
  }

  /**
  * @dev Activates an existing beneficiary in the mapping
  * @param beneficiaryId the identifier for the beneficiary address
  */
  function activateBeneficiary(uint8 beneficiaryId) public onlyOwner whenNotPaused {
    require(beneficiaries[beneficiaryId].addr > 0);
    require(!beneficiaries[beneficiaryId].isActive);

    beneficiaries[beneficiaryId].isActive = true;
    emit BeneficiaryActivated(beneficiaryId);
  }

  /**
  * @dev Deactivates a beneficiary from the mapping
  * @param beneficiaryId the identifier for the beneficiary address
  */
  function deactivateBeneficiary(uint8 beneficiaryId) public onlyOwner whenNotPaused {
    require(beneficiaries[beneficiaryId].addr > 0);
    require(beneficiaries[beneficiaryId].isActive);

    beneficiaries[beneficiaryId].isActive = false;
    emit BeneficiaryDeactivated(beneficiaryId);
  }

  /**
  * @dev Updates the minter address
  * @param _addr the new minter address
  */
  function updateMinter(address _addr) public onlyOwner whenNotPaused {
    require(_addr > 0);
    minterAddress = _addr;
  }

  /**
  * @dev Returns the token IDs of the address
  * @param _addr the address to retrieve tokens for
  */
  function tokensOf(address _addr) external view returns (uint256[]) {
    require(_addr > 0);
    return ownedTokens[_addr];
  }

  /**
  * @dev Returns the token URI given a token ID
  * @param _id the id of the token
  */
  function tokenUriById(uint256 _id) external view returns (string) {
    require(_id > 0);
    return tokenURIs[_id];
  }

  /**
  * @dev Verifies a given hash and ECDSA signature match the minter address
  * @param h to verify
  * @param v ECDSA signature parameter
  * @param r ECDSA signature parameter
  * @param s ECDSA signature parameter
  * @return bool whether the hash was signed by the minter
  */
  function verifyMessage(bytes32 h, uint8 v, bytes32 r, bytes32 s) private view returns (bool) {
    bytes memory prefix = "\x19Ethereum Signed Message:\n32";
    bytes32 prefixedHash = keccak256(abi.encodePacked(prefix, h));
    address addr = ecrecover(prefixedHash, v, r, s);
    bool verified = (addr == minterAddress);
    return verified;
  }

  /**
  * @dev Transfers amount to beneficiary
  * @param amount the amount to transfer
  * @param _beneficiaryId the beneficiary to receive it
  */
  function transferToBeneficiary(uint256 amount, uint8 _beneficiaryId) private {
    beneficiaryInfo storage beneficiary = beneficiaries[_beneficiaryId];
    beneficiary.addr.transfer(amount);
    beneficiary.total = beneficiary.total.add(amount);
  }

  /**
  * @dev Mints an ERC721 token with the token URI
  * @param _to the address to send the ERC721
  * @param _tokenURI the token URI containing metadata
  * @return uint256 the new token ID
  */
  function mintToken(address _to, string _tokenURI) private returns (uint256) {
    uint256 newTokenId = _getNextTokenId();
    _mint(_to, newTokenId);
    _setTokenURI(newTokenId, _tokenURI);
    return newTokenId;
  }

  /**
  * @dev calculates the next token ID based on totalSupply
  * @return uint256 for the next token ID
  */
  function _getNextTokenId() private view returns (uint256) {
    return totalSupply().add(1); 
  }
}
