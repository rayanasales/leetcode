var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left]; // Temporarily store the left element
    s[left] = s[right]; // Swap the right element to the left position
    s[right] = temp; // Swap the stored left element to the right position

    ++left; // Move the left pointer towards the center
    --right; // Move the right pointer towards the center
  }
};
