# 905. Sort Array By Parity

## Found at

[Resource Library – Google Tech Dev Guide](https://techdevguide.withgoogle.com/resources/?programming_languages=javascript&types=coding-question)

## Leetcode link

[Sort Array By Parity - LeetCode](https://leetcode.com/problems/sort-array-by-parity/description/)

## Solution

```js
var sortArrayByParity = function (nums) {
  let evens = [];
  let odds = [];
  nums.forEach((n) => (n % 2 === 0 ? evens.push(n) : odds.push(n)));
  return [...evens, ...odds];
};
```

## Leetcode post

[Sort Array By Parity - LeetCode](https://leetcode.com/problems/sort-array-by-parity/solutions/5642902/simple-beginner-friendly-905-sort-array-by-parity/)
