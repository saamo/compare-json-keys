var assert = require('assert');
var compareJsonKeys = require('./');

it('should compare keys', function() {
  assert.equal(compareJsonKeys({ a: 1, b: 2 }, { b: 1, a: 2 }), true, 'it should have returned true because keys are the same');
  assert.notEqual(compareJsonKeys({ a: 1, b: 2 }, { b: 1, c: 2 }), true, 'it should have returned false because keys are not the same');
});
