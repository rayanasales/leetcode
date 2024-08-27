var flat = function (arr, n) {
  if (n === 0) return arr;

  let output = [];

  function dig(array, depth) {
    array.forEach((current) => {
      if (!Array.isArray(current)) {
        output.push(current);
      } else {
        if (depth < n) {
          // Continue flattening
          dig(current, depth + 1); // ++dept or depth++ does not work, because this will change the original depth, and we need to keep the original value for each depht
        } else {
          // Do not flatten beyond depth
          output.push(current);
        }
      }
    });
  }

  dig(arr, 0); // Start with depth 0

  return output;
};
