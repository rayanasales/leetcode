# 1281. Subtract the Product and Sum of Digits of an Integer

# Found at

[Resource Library – Google Tech Dev Guide](https://techdevguide.withgoogle.com/resources/?programming_languages=javascript&types=coding-question)

# Leetcode link

[Subtract the Product and Sum of Digits of an Integer - LeetCode](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/)

# Super Easy Code in javascript

```javascript
var subtractProductAndSum = function (num) {
  let numAsStr = num.toString();
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numAsStr.length; i++) {
    let current = Number(numAsStr[i]);
    product *= current;
    sum += current;
  }

  return product - sum;
};
```

# Leetcode post

[Subtract the Product and Sum of Digits of an Integer - LeetCode](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/5642606/simple-beginner-friendly-1281-subtract-the-product-and-sum-of-digits-of-an-integer/)
