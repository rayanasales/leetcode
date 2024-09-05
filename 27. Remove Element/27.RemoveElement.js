var removeElement = function (nums, val) {
  // Loop through the array using index i
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to val, remove it
    if (nums[i] === val) {
      nums.splice(i, 1); // Remove the element at index i
      i--; // Decrement i to re-check the new element at index i
    }
  }
  return nums.length; // Return the new length of the array
};
