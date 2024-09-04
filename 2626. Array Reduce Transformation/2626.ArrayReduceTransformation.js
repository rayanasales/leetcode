var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  return nums.reduce((accumulator, currentValue) => {
    return fn(accumulator, currentValue);
  }, init); // initial value of accumulator
};
