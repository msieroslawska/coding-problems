const { expect } = require('chai');

module.exports = (chop) => {
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

      it('when the array is a bit bigger', () => {
        expect(chop(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).to.equal(2);
      });
    });
  });
};
