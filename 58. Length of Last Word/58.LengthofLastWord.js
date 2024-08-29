var lengthOfLastWord = function (s) {
  let sanitized = "";
  let previousChar = " ";

  for (let i = 0; i < s.length; i++) {
    // If the current character is not a space, append it to 'sanitized'.
    if (s[i] !== " ") sanitized += s[i];
    // If the current character is a space and the previous character was not a space, append the space to 'sanitized'. This avoids multiple consecutive spaces.
    else if (s[i] === " " && previousChar !== " ") sanitized += s[i];
    previousChar = s[i]; // Update 'previousChar' with the current character for the next iteration.
  }
  let parts = sanitized.split(" ").filter((p) => p.length > 0); // Split 'sanitized' into an array of words, filtering out any empty strings.
  let partsLength = parts.length; // Calculate the number of parts (words) in the array.
  return parts[partsLength - 1].length; // Calculate the number of parts (words) in the array.
};
