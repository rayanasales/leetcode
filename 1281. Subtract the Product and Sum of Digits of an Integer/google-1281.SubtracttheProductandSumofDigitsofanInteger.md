# 1281. Subtract the Product and Sum of Digits of an Integer

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

🌱 Difficulty: `Easy`

**❤️ Leetcode Problem Description: [Subtract the Product and Sum of Digits of an Integer - Problem - Description](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/)**

**❤️ Leetcode Solution by Rayana Sales: [Subtract the Product and Sum of Digits of an Integer - Solution - Rayana Sales](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/5642606/simple-beginner-friendly-1281-subtract-the-product-and-sum-of-digits-of-an-integer/)**

**💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)**

**❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥**

---

## Super Easy Code in Javascript

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

---

# Please UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️

and check it out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘
