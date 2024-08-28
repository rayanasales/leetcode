var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let uniqueIndex = 0; // Initialize the first pointer

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last unique element
    if (nums[i] !== nums[uniqueIndex]) {
      // Move the uniqueIndex forward and update the value
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  return uniqueIndex + 1; // Return the number of unique elements
};
