'use strict';

var ioncore = module.exports;

// module information
ioncore.version = 'v' + require('./package.json').version;
ioncore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ioncore-lib found. ' +
      'Please make sure to require ioncore-lib and check that submodules do' +
      ' not also include their own ioncore-lib dependency.';
    throw new Error(message);
  }
};
ioncore.versionGuard(global._ioncore);
global._ioncore = ioncore.version;

// crypto
ioncore.crypto = {};
ioncore.crypto.BN = require('./lib/crypto/bn');
ioncore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ioncore.crypto.Hash = require('./lib/crypto/hash');
ioncore.crypto.Random = require('./lib/crypto/random');
ioncore.crypto.Point = require('./lib/crypto/point');
ioncore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ioncore.encoding = {};
ioncore.encoding.Base58 = require('./lib/encoding/base58');
ioncore.encoding.Base58Check = require('./lib/encoding/base58check');
ioncore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ioncore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ioncore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ioncore.util = {};
ioncore.util.buffer = require('./lib/util/buffer');
ioncore.util.js = require('./lib/util/js');
ioncore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ioncore.errors = require('./lib/errors');

// main bitcoin library
ioncore.Address = require('./lib/address');
ioncore.Block = require('./lib/block');
ioncore.MerkleBlock = require('./lib/block/merkleblock');
ioncore.BlockHeader = require('./lib/block/blockheader');
ioncore.HDPrivateKey = require('./lib/hdprivatekey.js');
ioncore.HDPublicKey = require('./lib/hdpublickey.js');
ioncore.Networks = require('./lib/networks');
ioncore.Opcode = require('./lib/opcode');
ioncore.PrivateKey = require('./lib/privatekey');
ioncore.PublicKey = require('./lib/publickey');
ioncore.Script = require('./lib/script');
ioncore.Transaction = require('./lib/transaction');
ioncore.URI = require('./lib/uri');
ioncore.Unit = require('./lib/unit');

// dependencies, subject to change
ioncore.deps = {};
ioncore.deps.bnjs = require('bn.js');
ioncore.deps.bs58 = require('bs58');
ioncore.deps.Buffer = Buffer;
ioncore.deps.elliptic = require('elliptic');
ioncore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ioncore.Transaction.sighash = require('./lib/transaction/sighash');
