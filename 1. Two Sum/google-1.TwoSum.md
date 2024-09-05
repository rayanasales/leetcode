# 1. Two Sum

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

🪴 Difficulty: `Easy`

❤️ Leetcode Problem Description: [Two Sum - Problem - Description](https://leetcode.com/problems/two-sum/description/?envType=company&envId=google&favoriteSlug=google-thirty-days)

❤️ Leetcode Solution by Rayana Sales: [Two Sum - Solution - Rayana Sales](https://leetcode.com/problems/two-sum/solutions/5628706/simple-beginner-friendly-two-sum/)

💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)

❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥

---

# Solution in javascript

```js
var twoSum = function (nums, target) {
  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    let missing = target - nums[i]; // Calculate the number needed to reach the target
    let indexOfMissing = nums.indexOf(missing); // Find the index of the missing number

    // Check if the missing number exists and is not the same as the current number
    if (indexOfMissing >= 0 && indexOfMissing !== i) {
      return [i, indexOfMissing]; // Return the indices of the two numbers
    }
  }
};
```

### **Brief Strategy Explanation:**

- **Goal:** Find two numbers in the array `nums` that add up to the `target`.
- **Strategy:** For each number in the array, calculate what is needed to reach the `target` (`missing`). Search for this value in the array. If it's found and it's not the same number, return the indices of both numbers.
- **Efficiency:** This approach may be inefficient for large arrays because `indexOf` is used inside the loop, but it works for the problem at hand.

---

# Please UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️

and check it out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘

![image.png](https://assets.leetcode.com/users/images/57bce3b1-56e2-4c20-9cdf-b61fef26b93b_1725494158.6252415.png)
