var shortestCompletingWord = (licensePlate, words) => {
  // Step 1: Sanitize the license plate by converting it to lowercase and removing digits and spaces
  let fixLicense = licensePlate.toLowerCase().replace(/[\d\s]/g, "");

  // Step 2: Sort the words by their length in ascending order, so we check the shortest words first
  let sortWords = [...words].sort((a, b) => a.length - b.length);

  // Step 3: Loop through the sorted words
  for (let word of sortWords) {
    // Copy the sanitized license plate (we will be removing matched characters from it)
    let copyLicense = fixLicense;

    // Step 4: Loop through each character of the current word
    for (let i = 0; i < word.length; i++) {
      // Try to remove the current word character from the copy of the license plate string
      copyLicense = copyLicense.replace(word[i], "");

      // Step 5: If the copy of the license plate is empty, it means all characters have been found
      if (!copyLicense) return word; // Return the word as the shortest completing word
    }
  }

  // Step 6: If no valid word is found (which shouldn't happen based on problem constraints), throw an error
  throw new Error("don`t have completing word");
};
