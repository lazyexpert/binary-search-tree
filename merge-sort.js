function sort(array, comparator) {
  if (array.length <= 1) {
    return array;
  }

  const middle = (array.length / 2) | 0;
  const left = sort(array.slice(0, middle));
  const right = sort(array.slice(middle, array.length));

  return merge(left, right, comparator);
}

function merge(arrayA, arrayB, comparator) {
  const result = [];

  while (arrayA.length && arrayB.length) {
    if (comparator(arrayA[0], arrayB[0])) {
      result.push(arrayA[0]);
      arrayA.splice(0, 1);
    } else {
      result.push(arrayB[0]);
      arrayB.splice(0, 1);
    }
  }

  if (arrayA.length) {
    return result.concat(arrayA);
  } else {
    return result.concat(arrayB);
  }
}

module.exports = sort;
