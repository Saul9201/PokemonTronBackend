var MrCryptoToken = artifacts.require("./token/MrCryptoToken.sol");
var MrCryptoMining = artifacts.require("./token/MrCryptoMining.sol");

module.exports = function(deployer) {
  deployer.deploy(MrCryptoToken).then(r => {
    deployer.deploy(MrCryptoMining, r.address);
  })
};
