var containsDuplicate = function (nums) {
  let set = new Set(); // Create a Set to store unique elements

  // Loop through each element in the array
  for (let i of nums) {
    // If the element is already in the Set, it means we have found a duplicate
    if (set.has(i)) {
      return true; // Return true because a duplicate is found
    }
    // Otherwise, add the element to the Set to keep track of it
    set.add(i);
  }

  // If the loop completes and no duplicates are found, return false
  return false;
};
