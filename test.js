
var assert = require('assert');
var Joi = require('joi');
var oid = require('./');

describe('joi-objectid', function() {
  it('requires an hexadecimal string of 24 chars', function(done) {
    var tests = [
      { val: '$bcd56789012345678901234', pass: false }
    , { val: ' bcd56789012345678901234', pass: false }
    , { val: 'abcd5678901234567890123', pass: false }
    , { val: 'abcd56789012345678901234', pass: true }
    , { val: 123456789012345678901234, pass: false }
    , { val: { length: 24 } , pass: false }
    ]

    var schema = { val: oid() };

    tests.forEach(function(test) {
      var res = Joi.validate({ val: test.val }, schema);
      assert(test.pass === ! res.error, res.error);
    });

    done();
  });
});
