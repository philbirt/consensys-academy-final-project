var Minter = artifacts.require("./Minter.sol");

module.exports = function(deployer) {
  deployer.deploy(Minter).then(function(instance) {
    instance.addBeneficiary(1, '0x7E155a0d7AB1ecEc24E9cCaA99104291655014C8');
    instance.addBeneficiary(2, '0xafBCC39f474baf9596C1135522810d5f409DDE0F');
    instance.addBeneficiary(3, '0x6330a553fc93768f612722bb8c2ec78ac90b3bbc');
    instance.updateMinter('0x627306090abab3a6e1400e9345bc60c78a8bef57');
  });
  // .then(function(instance) {
  //   instance.beneficiaries(3).then(function(response) {
  //     console.log(response);
  //   });
  // });
};
