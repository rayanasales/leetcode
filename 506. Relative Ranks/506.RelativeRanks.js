var findRelativeRanks = function (score) {
  // Get the number of athletes
  const n = score.length;

  // Initialize an empty array to store the ranks
  const output = new Array(n);

  // Create an array of indices and sort them by the scores in descending order
  const sortedIndices = score
    .map((s, i) => i)
    .sort((a, b) => score[b] - score[a]);

  // Loop through the sorted indices and assign ranks based on the index position
  for (let i = 0; i < n; i++) {
    const rank = i + 1; // Rank is the position in the sorted order (1-based index)

    // Assign the appropriate medal or rank to the corresponding athlete's index
    if (rank === 1) output[sortedIndices[i]] = "Gold Medal";
    else if (rank === 2) output[sortedIndices[i]] = "Silver Medal";
    else if (rank === 3) output[sortedIndices[i]] = "Bronze Medal";
    else output[sortedIndices[i]] = rank.toString();
  }

  // Return the result array containing the ranks in the original order of scores
  return output;
};
