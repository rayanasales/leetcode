/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;

  // Shift all non-zero elements to the front
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // Swap only when left and right are different
      if (left !== right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
      }
      left++; // Move left to the next position for non-zero elements
    }
  }

  // The array is now modified in-place with all zeroes at the end
};
