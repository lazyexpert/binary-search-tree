class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value, comparator) {
    comparator = comparator || this.defaultComparator;

    if (comparator(this.value, value)) {
      this.right = new Node(value);
    } else {
      this.left = new Node(value);
    }
  }

  defaultComparator(a, b) {
    return a > b;
  }

  extractValues(node, result) {
    node = node || this;
    result = result || [];
    result.push(node.value);
    if (node.left) {
      this.extractValues(node.left, result);
    }

    if (node.right) {
      this.extractValues(node.right, result);
    }

    return result;
  }
}

module.exports = Node;
