var arrayPairSum = function (nums) {
  const offset = 10000; // To handle negative numbers by shifting the range
  const frequency = new Array(20001).fill(0); // Array to store the frequency of each number.

  // Step 1: frequency occurrences of each number in nums
  for (let num of nums) {
    frequency[num + offset]++; // offset negative numbers to positive indices
  }

  let maxSum = 0;
  let shouldAdd = true; // Flag to decide whether to add the current number to maxSum

  // Step 2: Traverse through the frequency array to sum the minimum of pairs
  for (let i = 0; i < frequency.length; i++) {
    while (frequency[i] > 0) {
      if (shouldAdd) {
        maxSum += i - offset; // Convert index back to original number
      }
      // Toggle shouldAdd between true and false to pick every second element
      shouldAdd = !shouldAdd;
      frequency[i]--; // Decrease the frequency for this number
    }
  }

  return maxSum;
};
