var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: null, //needed to switch to rpcsync, wont sync auxpow blocks from .dat
  //magic: hex('c0c0c0c0'), //original dogecoin magic
  addressVersion: 0x5f ,
  privKeyVersion: 0xdf,
  P2SHVersion: 22,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('217647f1ac57172c7f75d5f1b59c5523d817418324c3274669fa040b57ef04e4'),
    merkle_root: hex('546ff7081853f88194256fd43efbebef0a2aa78ee150023252a1e4fea67dc6cb'),
    height: 0,
    nonce: 1644661,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1434661056,
    bits: '1e0ffff0', //  504365040
  },
  dnsSeeds: [
    'seed.sjwcoin.com'
  ],
  defaultClientPort: 19966
};

exports.mainnet = exports.livenet;

exports.testnet = { //not setup for sjw yet
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x71,
  privKeyVersion: 241,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('9E555073D0C4F36456DB8951F449704D544D2826D9AA60636B40374626780ABB'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 997879,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1391503289,
    bits: 504365040,
  },
  dnsSeeds: [
    'testdoge-seed.lionservers.de',
    'testdoge-seed-static.lionservers.de'
  ],
  defaultClientPort: 44556
};
