var findShortestSubArray = function (nums) {
  let frequence = {}; // Map to store the frequency of each number
  let firstIndex = {}; // Map to store the first occurrence of each number
  let lastIndex = {}; // Map to store the last occurrence of each number
  let degree = 0; // The degree of the array
  let minLength = nums.length; // Initialize minimum length to the max possible

  // Traverse the array once
  nums.forEach((n, i) => {
    // Set the first occurrence of the number if not already set
    if (firstIndex[n] === undefined) firstIndex[n] = i;
    // Set the last occurrence of the number
    lastIndex[n] = i;
    // Increment the frequency count
    frequence[n] = (frequence[n] || 0) + 1;
    // Update the degree of the array
    degree = Math.max(degree, frequence[n]);
  });

  // Now find the smallest subarray with the same degree
  for (let n in frequence) {
    if (frequence[n] === degree) {
      // Calculate the length of the subarray for this number
      minLength = Math.min(minLength, lastIndex[n] - firstIndex[n] + 1);
    }
  }

  return minLength;
};
