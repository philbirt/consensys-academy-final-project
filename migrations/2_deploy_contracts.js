var Minter = artifacts.require("./Minter.sol");

module.exports = function(deployer) {
  deployer.deploy(Minter);
};
