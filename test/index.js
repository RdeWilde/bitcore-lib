'use strict';

var should = require('chai').should();
var ioncore = require('../');

describe('#versionGuard', function() {
  it('global._ioncore should be defined', function() {
    should.equal(global._ioncore, ioncore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ioncore.versionGuard('version');
    }).should.throw('More than one instance of ioncore');
  });
});
