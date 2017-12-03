class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value, comparator) {
    comparator = comparator || Node.prototype.defaultComparator;

    if (comparator(this.value, value)) {
      this.left = new Node(value);
    } else {
      this.right = new Node(value);
    }
  }

  defaultComparator(a, b) {
    return a.value < b.value;
  }
}

module.exports = Node;
