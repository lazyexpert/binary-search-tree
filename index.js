const Node = require('./node');

const mergeSort = require('./merge-sort');

class BinarySearchTree {
  constructor() {
    this.head = null;

    this.comparator = null;
  }

  add(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    const allNodes = Node.extractValues(this.head);
    const sorted = mergeSort(allNodes);
  }

  hasValue(value) {

  }
}

module.exports = BinarySearchTree;
