function titleToNumber(columnTitle) {
  let result = 0;

  // Loop through each character in the columnTitle string
  for (let i = 0; i < columnTitle.length; i++) {
    // Convert the character to its corresponding number
    // 'A' corresponds to 1, 'B' to 2, ..., 'Z' to 26
    // We achieve this by subtracting the ASCII value of 'A' from the current character
    // and then adding 1 to get the correct value.
    const d = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;

    // Accumulate the result by shifting the previous result by 26 (base-26) and adding the current value.
    result = result * 26 + d;
  }

  return result;
}
