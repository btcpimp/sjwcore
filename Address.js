'use strict';
var imports = require('soop').imports();
var parent  = imports.parent || require('./util/VersionedData');
var networks= imports.networks || require('./networks');

function Address() {
  Address.super(this, arguments);
}

Address.parent = parent;
parent.applyEncodingsTo(Address);


Address.prototype.validate = function() {
  this.doAsBinary(function() {
    Address.super(this, 'validate', arguments);
    if(this.data.length !== 21) throw new Error('invalid data length');
  });
  if (typeof this.network() === 'undefined') throw new Error('invalid network');
};

Address.prototype.isValid = function() {
  var answer = Address.super(this, 'isValid', arguments);
  return answer;
};

Address.prototype.network = function() {
  var version = this.version();

  var livenet = networks.livenet;
  var testnet = networks.testnet;

  var answer;
  if (version === livenet.addressPubkey || version === livenet.addressScript)
    answer = livenet;
  else if (version === testnet.addressPubkey || version === testnet.addressScript)
    answer = testnet;

  return answer;
};

Address.prototype.isScript = function() {
  return this.isValid() && this.version() === this.network().addressScript;
};


module.exports = require('soop')(Address);
