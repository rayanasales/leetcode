var isVowel = function (letter) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter);
};

var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let swap = [];

  while (left < right) {
    if (isVowel(s[left])) {
      swap.push(left);
    }
    if (isVowel(s[right])) {
      swap.push(right);
    }

    // swap
    if (swap.length === 2) {
      let i = swap[0];
      let j = swap[1];

      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;

      swap = [];
    }

    left++;
    right--;
  }
  return s;
};

console.log(reverseVowels("leetcode"));
