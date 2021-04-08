const builderShop = artifacts.require("BuilderShop");

module.exports = function(deployer) {
  deployer.deploy(builderShop);
};