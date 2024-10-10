var intersection = function (nums1, nums2) {
  // Step 1: Track presence of nums1 in boolean array
  let seen = new Array(1001).fill(false);
  nums1.forEach((num) => (seen[num] = true));

  // Step 2: Collect results avoiding duplicates
  let added = new Array(1001).fill(false);
  let result = [];

  nums2.forEach((num) => {
    if (seen[num] && !added[num]) {
      result.push(num);
      added[num] = true;
    }
  });

  return result;
};
