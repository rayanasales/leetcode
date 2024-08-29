var distributeCandies = function (candyType) {
  const uniqueCandies = new Set(candyType).size; // Get the total number of unique candy types
  const maxCandies = candyType.length / 2; // Calculate the maximum number of candies Alice can eat, which is half the total number of candies
  return Math.min(uniqueCandies, maxCandies); // Return the minimum between the unique types and the maximum candies Alice can eat
};
