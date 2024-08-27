var inorderTraversal = function* (arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element); // Recursively yield values from nested arrays
    } else {
      yield element; // Yield the integer
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
