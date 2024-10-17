var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutive = 0; // To store the maximum number of consecutive 1s
  let currentConsecutive = 0; // To store the current streak of 1s

  for (let i = 0; i < nums.length; i++) {
    // If we encounter a 1, we increment the current streak count
    if (nums[i] === 1) {
      currentConsecutive++;
    } else {
      // If we encounter a 0, we compare the current streak with max
      // Then reset the current streak counter
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      currentConsecutive = 0;
    }
  }

  // After the loop, we return the maximum of the last streak and the previous maxConsecutive
  return Math.max(maxConsecutive, currentConsecutive);
};
