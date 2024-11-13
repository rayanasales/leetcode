var smallerNumbersThanCurrent = function (nums) {
  let output = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j != i && nums[j] < nums[i]) output[i] += 1;
    }
  }
  return output;
};
