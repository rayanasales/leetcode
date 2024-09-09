function missingNumber(nums) {
  let n = 0;
  for (let i = 1; i <= nums.length; i++) n += i;
  for (let i = 0; i < nums.length; i++) n -= nums[i];
  return n;
}
