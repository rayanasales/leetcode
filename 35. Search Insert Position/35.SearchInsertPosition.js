var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle; // If the target is found, return the index
    } else if (nums[middle] < target) {
      left = middle + 1; // If target is greater, search in the right half
    } else {
      right = middle - 1; // If target is smaller, search in the left half
    }
  }

  // If target is not found, left is the insertion point
  return left;
};
