const VRFChainlink = artifacts.require('VRFTestnetD20');

module.exports = function(deployer) {
    deployer.deploy(VRFChainlink, '0xf720CF1B963e0e7bE9F58fd471EFa67e7bF00cfb', '0x20fE562d797A42Dcb3399062AE9546cd06f63280');
}
