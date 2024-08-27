Array.prototype.groupBy = function (fn) {
  let output = {};

  this.forEach((current) => {
    let key = fn(current);

    if (!output[key]) {
      output[key] = [];
    }

    output[key].push(current);
  });

  return output;
};
