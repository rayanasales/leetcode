var twoSum = function (nums, target) {
  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    let missing = target - nums[i]; // Calculate the number needed to reach the target
    let indexOfMissing = nums.indexOf(missing); // Find the index of the missing number

    // Check if the missing number exists and is not the same as the current number
    if (indexOfMissing >= 0 && indexOfMissing !== i) {
      return [i, indexOfMissing]; // Return the indices of the two numbers
    }
  }
};
