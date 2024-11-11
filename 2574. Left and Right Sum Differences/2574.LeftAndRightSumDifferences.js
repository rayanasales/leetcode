var leftRightDifference = function (nums) {
  let numsDiff = [],
    leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    numsDiff[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }
  return numsDiff;
};
