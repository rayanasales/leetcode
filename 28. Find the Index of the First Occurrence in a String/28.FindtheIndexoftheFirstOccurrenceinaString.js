var strStr = function (str1, str2) {
  if (!str1.includes(str2)) return -1;

  let str2FirstChar = str2[0]; // Store the first character of `str2` for comparison
  let str2Length = str2.length; // Store the length of `str2` to use when extracting substrings from `str1`

  for (let i = 0; i < str1.length; i++) {
    // Loop through `str1` to find a match for `str2`
    if (str1[i] === str2FirstChar) {
      // If the current character in `str1` matches the first character of `str2`...
      let temp = str1.slice(i, i + str2Length); // Extract the substring of length `str2Length` starting at index `i`
      if (temp === str2) return i; // If the extracted substring matches `str2`, return the current index `i`. Otherwise, keep searching.
    }
  }
  return -1;
};
