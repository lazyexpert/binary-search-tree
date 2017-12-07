class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static defaultComparator(a, b) {
    return a.value < b.value;
  }
}

module.exports = Node;
