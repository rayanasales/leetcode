var mostCommonWord = function (paragraph, banned) {
  // Create a set for banned words for faster lookup
  let bannedSet = new Set(banned);

  // Preprocess paragraph: remove punctuation, convert to lowercase, and split into words
  let words = paragraph
    .toLowerCase()
    .replace(/[!?',;.\s]+/g, " ")
    .split(" ");

  // Create a map to store the frequency of each word
  let occurrencesMap = new Map();
  let maxCount = 0;
  let mostCommon = "";

  // Count occurrences of non-banned words
  for (let word of words) {
    if (word && !bannedSet.has(word)) {
      // Ignore empty strings and banned words
      occurrencesMap.set(word, (occurrencesMap.get(word) || 0) + 1);

      // Track the most common word
      if (occurrencesMap.get(word) > maxCount) {
        maxCount = occurrencesMap.get(word);
        mostCommon = word;
      }
    }
  }

  return mostCommon;
};
