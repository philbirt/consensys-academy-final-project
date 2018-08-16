There are several ways I went about avoiding common attacks.

One way, which I discussed in the design pattern decisions doc, was by employing fully-audited code for the most part, and making all but one function only callable by the owner of the contract.

Another way I avoided common attacks is by writing a unit spec for every conceivable variation on inputs to each function.

I added require statements at the top of each function to validate the input, and checked that these preconditions are met in each unit spec. I limited the accessibility of the functions by making things private when no external caller needs to use it, made each public function pausable, and made all owner-specific transactions only callable by the owner. I used SafeMath from zeppelin when dealing with addition of two uints.

I also created a distinction between the address that signs valid token URIs for minting ERC721 tokens (minterAddress), and the address that owns the contract. Since the private key of the minter will have to live on a server, it made sense to separate the concerns of having that key possibly getting compromised and losing control of the full contract. I created an owner-only function to update this minterAddress should the need arise.

There is also a way I went about avoiding having arbitrary unvalidated user input in the mintTo function, by leveraging ECDSA signatures:

Token URIs (in the form of an IPFS URI) must be signed by the minterAddress to verify that the URI came from the dApp, and not any other arbitrary user-generated URI.

To do this, I packed the inputs (_to, _beneficiaryId, _tokenURI, _nonce, msg.value) using keccak256 on the central service, and then sign that hash with the minter's private key. I then split ECDSA signature into it's parameters: v, r, and s, and allow the user to pass those values to the contract. The contract then uses the same process to pack those parameters using keccak256 and then passes that hash + v, r, s values to `ecrecover` to verify the minterAddress is valid.

In addition to making sure that each parameter passed to the mintTo function is part of the signed hash, I use nonces to avoid replay attacks. Just because a particular call was valid by a certain caller at a certain time, does not allow them to pass the same values through again later, by using one-time nonces generated off-chain.

For more information about this process, I used this as a guide when designing:
https://programtheblockchain.com/posts/2018/02/17/signing-and-verifying-messages-in-ethereum/
