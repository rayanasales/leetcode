# 905. Sort Array By Parity

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

🌱 Difficulty: `Easy`

❤️ Leetcode Problem Description: [Sort Array By Parity - Problem - Description](https://leetcode.com/problems/sort-array-by-parity/description/)

❤️ Leetcode Solution by Rayana Sales: [Sort Array By Parity - Solution - Rayana Sales](https://leetcode.com/problems/sort-array-by-parity/solutions/5642902/simple-beginner-friendly-905-sort-array-by-parity/)

💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)

❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥

---

## Commented Solution in Javascript

```Javascript []
var sortArrayByParity = function (nums) {
  let evens = [];
  let odds = [];
  nums.forEach((n) => (n % 2 === 0 ? evens.push(n) : odds.push(n)));
  return [...evens, ...odds];
};
```

---

# Please UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️

and check it out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘

![image.png](https://assets.leetcode.com/users/images/57bce3b1-56e2-4c20-9cdf-b61fef26b93b_1725494158.6252415.png)
