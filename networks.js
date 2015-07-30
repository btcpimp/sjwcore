var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

// setup for sjw mainnet
exports.livenet = {
  name: 'livenet',
  addressVersion: 0x5F,
  magic: hex('fbc0b6db'),
  genesisBlock: {
    height: 0,
    nonce: 1644661,
    version: 1,
    hash: hex('217647f1ac57172c7f75d5f1b59c5523d817418324c3274669fa040b57ef04e4'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1434661056,
    merkle_root: hex('546ff7081853f88194256fd43efbebef0a2aa78ee150023252a1e4fea67dc6cb'),
    bits: 0x1e0ffff0
  },
  addressPubkey: 0x1E,
  addressScript: 5,
  bip32public: 0x0488c42e,
  bip32private: 0x0488e1f4,
  keySecret: 128, //128? if SECRET_KEY from chainparams.cpp should be 128+pubkey_address so would be 223 for SJW
};

exports.testnet = {
  name: 'testnet',
  addressVersion: 0x6f,
  magic: hex('fcc1b7dc'),
  genesisBlock: {
    height: 0,
    nonce: 414098458,
    version: 1,
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    bits: 486604799,
  },
  genesisBlockTx: module.exports.livenet.genesisBlockTx,
  proofOfWorkLimit: module.exports.livenet.proofOfWorkLimit,
  checkpoints: [], // need to put checkput blocks here
  addressPubkey: 95,
  addressScript: 5,
  bip32public: 0x043587cf,
  bip32private: 0x04358394,
  keySecret: 239,
};
