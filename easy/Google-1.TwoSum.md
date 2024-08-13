# 1. Two Sum

# Google

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/?envType=company&envId=google&favoriteSlug=google-thirty-days)

# Solution

```jsx
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let missing = target - nums[i];
    let indexOfMissing = nums.indexOf(missing);

    if (indexOfMissing >= 0 && indexOfMissing !== i) {
      return [i, indexOfMissing];
    }
  }
};
```

# Explanation

### **Commented Code:**

```jsx
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

# Leetcode post

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/solutions/5628706/simple-beginner-friendly-two-sum/)
