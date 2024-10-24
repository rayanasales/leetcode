var sortArrayByParityII = function (nums) {
  let i = 0; // even index pointer
  let j = 1; // odd index pointer
  let n = nums.length;

  while (i < n && j < n) {
    // If number at even index i is odd, and number at odd index j is even, swap them
    if (nums[i] % 2 !== 0 && nums[j] % 2 === 0) {
      // Swap the elements directly without temporary variable to reduce operations
      nums[i] = nums[i] + nums[j];
      nums[j] = nums[i] - nums[j];
      nums[i] = nums[i] - nums[j];
    }

    // Increment i only if nums[i] is correctly placed (i.e., it's even)
    if (nums[i] % 2 === 0) i += 2;

    // Increment j only if nums[j] is correctly placed (i.e., it's odd)
    if (nums[j] % 2 !== 0) j += 2;
  }

  return nums;
};
