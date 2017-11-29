class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value, comparator) {
    comparator = comparator || Node.defaultComparator;

    if (comparator(this.value, value)) {
      this.right = new Node(value);
    } else {
      this.left = new Node(value);
    }
  }

  static defaultComparator(a, b) {
    return a > b;
  }

  static extractValues(node, result) {
    result = result || [];
    result.push(node.value);
    if (node.left) {
      Node.extractValues(node.left, result);
    }

    if (node.right) {
      Node.extractValues(node.right, result);
    }

    return result;
  }
}

module.exports = Node;
