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
    const comparator = this.comparator || Node.prototype.defaultComparator;
    const sorted = mergeSort(allNodes, comparator);
    
    const middle = (sorted.length / 2) | 0;
    this.head = sorted[middle];
    const left = sorted.slice(0, middle - 1);
    const right = sorted.slice(middle + 1, sorted.length);

    const comparator = this.comparator || Node.prototype.defaultComparator;

    this._addNodeToBalancedTree(left, this.head, comparator)
    this._addNodeToBalancedTree(right, this.head, comparator)
  }

  hasValue(value) {

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
    
    const left = nodesArray.slice(0, middle - 1);
    const right = nodesArray.slice(middle + 1, nodesArray.length);

    this._addNodeToBalancedTree(left, processingNode, comparator);
    this._addNodeToBalancedTree(right, processingNode, comparator);
  }

  _assignNewNode(node, currentNode, comparator) {
    if (comparator(node.value, currentNode.value)) {
      currentNode.left = node;
    } else {
      currentNode.right = node;
    }
  }
}

module.exports = BinarySearchTree;
