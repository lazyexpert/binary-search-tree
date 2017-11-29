const Node = require('./node');

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
  }

  hasValue(value) {

  }
}

module.exports = BinarySearchTree;
