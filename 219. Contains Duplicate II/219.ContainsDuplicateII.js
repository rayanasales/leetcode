var containsNearbyDuplicate = function (nums, k) {
  let map = new Map(); // Create a HashMap to store elements and their indices

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the element already exists in the map and if the distance is <= k
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true; // Found duplicate within range
    }
    // Update the map with the current index
    map.set(nums[i], i);
  }

  return false; // No duplicates found within the allowed range
};
