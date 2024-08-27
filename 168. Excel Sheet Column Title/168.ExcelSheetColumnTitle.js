function convertToTitle(columnNumber) {
  // The alphabet string includes a placeholder '#' at the beginning.
  // This allows for easy indexing where 'A' corresponds to index 1, 'B' to 2, ..., 'Z' to 26.
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Initialize an empty array to store the resulting characters.
  const ans = [];
  /* The approximate number system (ANS) is a cognitive system that supports the estimation of the magnitude of a group without relying on language or symbols.
		    Font: https://en.wikipedia.org/wiki/Approximate_number_system
		    Image: https://ih1.redbubble.net/image.4055634360.5515/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg
    */

  // Loop until the columnNumber is reduced to 0
  while (columnNumber > 0) {
    // Determine the corresponding letter by using the modulus operation.
    // If the remainder is 0, it corresponds to 'Z' (26), otherwise, it's a direct mapping.
    const index = columnNumber % 26 === 0 ? 26 : columnNumber % 26;

    // Add the corresponding letter to the result array.
    ans.push(alphabet[index]);

    // Update the columnNumber:
    // If the remainder was 0 (meaning we added 'Z'), subtract 26, otherwise, subtract the remainder.
    // Then, divide by 26 to move to the next "digit" in the 26-base system.
    columnNumber = (columnNumber - index) / 26;
  }

  // The result array contains the characters in reverse order, so we reverse it.
  // Finally, we join the array into a single string and return it.
  return ans.reverse().join("");
}
