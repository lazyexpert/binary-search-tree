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
    const newNode = new Node(value);

    const allNodes = (this._extractValues(this.head)).concat(newNode);
    const comparator = this.comparator || Node.prototype.defaultComparator;
    const sorted = mergeSort(allNodes, comparator);
    
    const middle = (sorted.length / 2) | 0;
    this.head = sorted[middle];
    const filteredNodes = sorted.filter(el => el.value !== this.head.value);

    this._divideTreeAndContinue(filteredNodes, middle, this.head, comparator);
  }

  hasValue(value) {

  }

  _extractValues(node, result) {
    node = node || this.head;
    result = result || [];
    const left = node.left;
    const right = node.right;
    node.left = null;
    node.right = null;

    result.push(node);

    left && this._extractValues(left, result);
    right && this._extractValues(right, result);

    return result;
  }

  _addNodeToBalancedTree(nodesArray, currentNode, comparator) {
    if (!nodesArray.length) {
      return;
    }

    if (nodesArray.length === 1) {
      return this._assignNewNode(nodesArray[0], currentNode, comparator);
    }

    const middle = (nodesArray.length / 2) | 0;
    const processingNode = nodesArray[middle];
    this._assignNewNode(processingNode, currentNode, comparator);
    const filteredNodes = nodesArray.filter(el => el.value !== processingNode.value);

    this._divideTreeAndContinue(filteredNodes, middle, processingNode, comparator);
  }

  _divideTreeAndContinue(nodes, middle, processingNode, comparator) {
    const left = nodes.slice(0, middle);
    const right = nodes.slice(middle, nodes.length);

    this._addNodeToBalancedTree(left, processingNode, comparator);
    this._addNodeToBalancedTree(right, processingNode, comparator);    
  }

  _assignNewNode(node, currentNode, comparator) {
    if (comparator(node, currentNode)) {
      currentNode.left = node;
    } else {
      currentNode.right = node;
    }
  }
}

module.exports = BinarySearchTree;
