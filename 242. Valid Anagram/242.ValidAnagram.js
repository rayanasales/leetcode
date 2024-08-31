var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  sSorted = s.split("").sort().join("");
  tSorted = t.split("").sort().join("");

  return sSorted === tSorted;
};
