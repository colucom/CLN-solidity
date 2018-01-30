var SafeMath = artifacts.require("./SafeMath.sol");
var Ownable = artifacts.require("./Ownable.sol");
var ERC20 = artifacts.require("./ERC20.sol");
var BasicToken = artifacts.require("./BasicToken.sol");

var ColuLocalNetwork = artifacts.require('./ColuLocalNetwork.sol');

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Ownable);
  //deployer.deploy(ERC20);

  deployer.link(SafeMath, ColuLocalNetwork);
  deployer.link(Ownable, ColuLocalNetwork);
  //deployer.link(ERC20, BasicToken);

  deployer.deploy(ColuLocalNetwork);
  deployer.deploy(BasicToken);
};

