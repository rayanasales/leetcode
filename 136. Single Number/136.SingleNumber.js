var singleNumber = function (nums) {
  // Initialize a variable to store the result
  let result = 0;

  // XOR every number in the array
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  // The result will hold the single number
  return result;
};
