var intersect = function (nums1, nums2) {
  // Step 1: Create a frequency array for nums1
  let freq = new Array(1001).fill(0);
  nums1.forEach((num) => freq[num]++); // Count frequency of each element in nums1

  // Step 2: Collect the intersection
  let result = [];
  nums2.forEach((num) => {
    if (freq[num] > 0) {
      result.push(num); // Add the number to the result
      freq[num]--; // Decrease the frequency count
    }
  });

  return result;
};
