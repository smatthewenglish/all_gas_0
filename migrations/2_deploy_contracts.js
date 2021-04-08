const BuilderShop = artifacts.require("BuilderShop");

module.exports = function(deployer) {
  deployer.deploy(BuilderShop);
};