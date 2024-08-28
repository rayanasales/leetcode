var longestCommonPrefix = function (strs) {
  // If the array is empty, return an empty string
  if (strs.length === 0) return "";

  // Take the first string as the initial prefix
  let prefix = strs[0];

  // Iterate over the rest of the strings in the array
  for (let i = 1; i < strs.length; i++) {
    // Compare the current string with the prefix
    // Reduce the prefix until it matches the start of the current string
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix by one character from the end
      prefix = prefix.substring(0, prefix.length - 1);

      // If prefix becomes empty, return ""
      if (prefix === "") return "";
    }
  }

  // Return the final common prefix
  return prefix;
};
