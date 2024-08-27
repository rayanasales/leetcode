function isPalindrome(x) {
  // Early return for negative numbers and numbers ending in 0 (except 0 itself)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;

  // Reverse the second half of the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Directly compare the two halves
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
