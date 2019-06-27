const { expect } = require('chai');
const munging = require('../solutions/CK-data-munging-v1');

describe.only('data munging function', () => {
  describe('should return -1', () => {
    it('should pass', () => {
      expect(munging()).to.equal(true);
    });
  });
});
