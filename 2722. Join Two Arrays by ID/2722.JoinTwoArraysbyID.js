var join = function (arr1, arr2) {
  let mergedArr = [...arr1, ...arr2]; // Merge both arrays into a single array
  let result = {}; // Initialize an empty object to store merged results by id

  for (const item of mergedArr) {
    if (!result[item.id]) {
      // If the id does not yet exist in the result object, add the item as is
      result[item.id] = item;
      continue; // Skip to the next iteration
    }
    result[item.id] = { ...result[item.id], ...item }; // If the id already exists, merge the current item with the existing one.
  }
  return Object.values(result); // Convert the result object back to an array of values and return it
};
