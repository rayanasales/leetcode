var isIsomorphic = function (s, t) {
  // Edge case: If lengths of s and t are different, they can't be isomorphic
  if (s.length !== t.length) return false;

  // Create two arrays to store the mapping of characters (ASCII size is 256)
  let mapS = new Array(256).fill(-1); // Mapping from s to t
  let mapT = new Array(256).fill(-1); // Mapping from t to s

  // Iterate through the characters of the strings
  for (let i = 0; i < s.length; i++) {
    let charS = s.charCodeAt(i); // Get ASCII code for character in s
    let charT = t.charCodeAt(i); // Get ASCII code for character in t

    // Check if there's a mapping for charS in mapS
    if (mapS[charS] === -1 && mapT[charT] === -1) {
      // If both characters have not been mapped yet, create a new mapping
      mapS[charS] = charT;
      mapT[charT] = charS;
    } else {
      // If there's an existing mapping, check if it's consistent
      if (mapS[charS] !== charT || mapT[charT] !== charS) {
        return false;
      }
    }
  }

  // If we finish the loop without inconsistencies, the strings are isomorphic
  return true;
};
