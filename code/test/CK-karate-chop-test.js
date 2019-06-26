const { expect } = require('chai');

const chop = require('../solutions/CK-karate-chop');

describe('karate chop function', () => {
  describe('should return -1', () => {
    describe('when the array is', () => {
      it('empty', () => {
        expect(chop(3, [])).to.equal(-1);
      });

      it('not an array', () => {
        expect(chop(3, 'xx')).to.equal(-1);
        expect(chop(3, {})).to.equal(-1);
        expect(chop(3, true)).to.equal(-1);
      });
    });

    describe('when the search value', () => {
      it('is not a number', () => {
        expect(chop(undefined, [1])).to.equal(-1);
        expect(chop(false, [1])).to.equal(-1);
        expect(chop([], [1])).to.equal(-1);
        expect(chop(null, [1])).to.equal(-1);
        expect(chop({}, [1])).to.equal(-1);
      });
    });

    it('when called with less than 2 arguments', () => {
      expect(chop([1])).to.equal(-1);
      expect(chop()).to.equal(-1);
      expect(chop(undefined)).to.equal(-1);
    });

    it('when the value does not exist in the array', () => {
      expect(chop(0, [1])).to.equal(-1);
    });
  });

  describe('should return correct index for a value existing in the array', () => {
    it('when the array has only one element', () => {
      expect(chop(1, [1])).to.equal(0);
    });

    it('when the value is the first element of the array', () => {
      expect(chop(1, [1, 2, 3])).to.equal(0);
      expect(chop(1, [1, 2, 3, 4, 5, 6])).to.equal(0);
    });

    it('when the value is the last element of the array', () => {
      expect(chop(3, [1, 2, 3])).to.equal(2);
    });
  });


  // assert.equal(chop(3, [1]), -1);
  // assert.equal(chop(1, [1]), 0);
  // assert.equal(chop(1, [1, 3, 5]), 0);
  // assert.equal(chop(3, [1, 3, 5]), 1);
  // assert.equal(chop(5, [1, 3, 5]), 2);
  // assert.equal(chop(0, [1, 3, 5]), -1);
  // assert.equal(chop(2, [1, 3, 5]), -1);
  // assert.equal(chop(4, [1, 3, 5]), -1);
  // assert.equal(chop(6, [1, 3, 5]), -1);
  // assert.equal(chop(1, [1, 3, 5, 7]), 0);
  // assert.equal(chop(3, [1, 3, 5, 7]), 1);
  // assert.equal(chop(5, [1, 3, 5, 7]), 2);
  // assert.equal(chop(7, [1, 3, 5, 7]), 3);
  // assert.equal(chop(0, [1, 3, 5, 7]), -1);
  // assert.equal(chop(2, [1, 3, 5, 7]), -1);
  // assert.equal(chop(4, [1, 3, 5, 7]), -1);
  // assert.equal(chop(6, [1, 3, 5, 7]), -1);
  // assert.equal(chop(8, [1, 3, 5, 7]), -1);
});
