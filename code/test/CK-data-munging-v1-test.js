const { expect } = require('chai');

const munging = require('../sources/CK-data-munging-v1');

describe('data munging function', () => {
  describe('should return -1', () => {
    it('should pass', () => {
      expect(munging()).to.equal(true);
    });
  });
});
