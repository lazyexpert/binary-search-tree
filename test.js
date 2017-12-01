const mergeSort = require('./merge-sort');
const expect = require('chai').expect;
const Node = require('./node');

describe('App', function() {
  describe('merge-sort', function() {
    it('should work in usual case', function() {
      const arr = [2, 4, 1, 3];
      const expected = [1, 2, 3, 4];

      const result = mergeSort(arr, Node.prototype.defaultComparator);

      expect(result).to.deep.equal(expected);
    });

    it('should work if length is odd', function() {
      const arr = [2, 4, 1, 5, 3];
      const expected = [1, 2, 3, 4, 5];

      const result = mergeSort(arr, Node.prototype.defaultComparator);

      expect(result).to.deep.equal(expected);
    });

    it('should work if array is length 1', function() {
      const arr = [2];
      const expected = [2];

      const result = mergeSort(arr, Node.prototype.defaultComparator);

      expect(result).to.deep.equal(expected);
    })

    it('should work if array is length 0', function() {
      const arr = [];
      const expected = [];

      const result = mergeSort(arr, Node.prototype.defaultComparator);

      expect(result).to.deep.equal(expected);
    })
  });
});
