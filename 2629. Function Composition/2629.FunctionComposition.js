/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let lastIndex = functions.length - 1;
    let current = x;

    for (let i = lastIndex; i >= 0; i--) {
      current = functions[i](current);
    }

    return current;
  };
};
