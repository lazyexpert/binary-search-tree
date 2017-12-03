const mergeSort = require('./merge-sort');
const expect = require('chai').expect;
const Node = require('./node');

const BinarySearchTree = require('./index');

function defaultComparator(a, b) {
  return a < b;
}
describe('App', function() {
  describe('merge-sort', function() {
    it('should work in usual case', function() {
      const arr = [2, 4, 1, 3];
      const expected = [1, 2, 3, 4];

      const result = mergeSort(arr, defaultComparator);

      expect(result).to.deep.equal(expected);
    });

    it('should work if length is odd', function() {
      const arr = [2, 4, 1, 5, 3];
      const expected = [1, 2, 3, 4, 5];

      const result = mergeSort(arr, defaultComparator);

      expect(result).to.deep.equal(expected);
    });

    it('should work if array is length 1', function() {
      const arr = [2];
      const expected = [2];

      const result = mergeSort(arr, defaultComparator);

      expect(result).to.deep.equal(expected);
    })

    it('should work if array is length 0', function() {
      const arr = [];
      const expected = [];

      const result = mergeSort(arr, defaultComparator);

      expect(result).to.deep.equal(expected);
    })
  });

  describe('binary search tree', function() {
    it('should create instance corectly', function() {
      const tree = new BinarySearchTree();

      expect(tree.comparator).to.be.null;
      expect(tree.head).to.be.null;
    });

    it('should assign head correctly', function() {
      const tree = new BinarySearchTree();
      tree.add(5);

      expect(tree.head).not.to.be.null;
      expect(tree.head.value).to.be.equal(5);
    });

    it('should rebalance tree', function() {
      const tree = new BinarySearchTree();
      tree.add(3);
      tree.add(1);
      tree.add(2);

      expect(tree.head.value).to.be.equal(2);
      expect(tree.head.left.value).to.be.equal(1);
      expect(tree.head.right.value).to.be.equal(3);
      expect(tree.head.left.left).to.be.null;
      expect(tree.head.left.right).to.be.null;
      expect(tree.head.right.left).to.be.null;
      expect(tree.head.right.right).to.be.null;
    })

    it('should rebalance bigger tree', function() {
      const tree = new BinarySearchTree();
      tree.add(7);
      tree.add(3);
      tree.add(5);
      tree.add(1);
      tree.add(4);
      tree.add(2);
      tree.add(6);

      expect(tree.head.value).to.be.equal(4);
      expect(tree.head.left.value).to.be.equal(2);
      expect(tree.head.right.value).to.be.equal(6);
      expect(tree.head.left.left.value).to.be.equal(1);
      expect(tree.head.left.right.value).to.be.equal(3);
      expect(tree.head.right.left.value).to.be.equal(5);
      expect(tree.head.right.right.value).to.be.equal(7);
    })
  });
});
