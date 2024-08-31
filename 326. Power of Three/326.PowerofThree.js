var isPowerOfThree = function (n) {
  // The maximum power of three within the integer limit is 3^19 = 1162261467
  // If n is a power of three, it must divide 1162261467 without a remainder
  return n > 0 && 1162261467 % n === 0;
};
