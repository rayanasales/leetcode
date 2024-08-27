var wordPattern = function (pattern, s) {
  // Split the string 's' into an array of words
  const words = s.split(" ");

  // If the length of the pattern doesn't match the number of words, return false immediately
  if (pattern.length !== words.length) return false;

  // Create two Maps to track the mappings between pattern characters and words
  const patternToWord = new Map(); // Maps characters from the pattern to words in 's'
  const wordToPattern = new Map(); // Maps words from 's' to characters in the pattern

  // Iterate through each character in the pattern and the corresponding word in 's'
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]; // Current character from the pattern
    const word = words[i]; // Corresponding word from 's'

    // Check if the current character is already mapped to a word
    if (
      (patternToWord.has(char) && patternToWord.get(char) !== word) || // Check if existing mapping is consistent
      (wordToPattern.has(word) && wordToPattern.get(word) !== char) // Check if the word is already mapped to a different character
    ) {
      return false; // If there's a mismatch in the mapping, return false
    }

    // If no inconsistencies were found, create the mappings
    patternToWord.set(char, word); // Map the character to the word
    wordToPattern.set(word, char); // Map the word to the character
  }

  // If all checks pass, return true indicating the pattern matches the string
  return true;
};
