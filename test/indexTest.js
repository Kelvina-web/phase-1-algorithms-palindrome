const assert = require('chai').assert;
const isPalindrome = require('../index');

describe('isPalindrome', () => {
  it('returns true for "abba"', () => {
    assert.isTrue(isPalindrome('abba'));
  });

  it('returns true for "racecar"', () => {
    assert.isTrue(isPalindrome('racecar'));
  });

  it('returns true for "a"', () => {
    assert.isTrue(isPalindrome('a'));
  });

  it('returns false for "robot"', () => {
    assert.isFalse(isPalindrome('robot'));
  });

  it('returns false for "ab"', () => {
    assert.isFalse(isPalindrome('ab'));
  });
});
