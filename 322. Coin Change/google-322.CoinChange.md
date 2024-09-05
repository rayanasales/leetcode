# 322. Coin Change

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

🪴 Difficulty: `Medium`

❤️ Leetcode Problem Description: [Coin Change - Problem - Description](https://leetcode.com/problems/coin-change/description/)

❤️ Leetcode Solution by Rayana Sales: [Coin Change - Solution - Rayana Sales](https://leetcode.com/problems/coin-change/solutions/5637020/322-coin-change-10-lines-solution/)

💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)

❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥

---

## Background: everything you need to know

### What is Dynamic Programming?

Dynamic Programming (DP) is an optimization technique used to solve complex problems by breaking them down into simpler subproblems. The main idea is to solve each subproblem once and store the result, so that we can reuse it when the same subproblem appears again. This avoids redundant calculations and reduces the execution time of the algorithm.

#### What is it used for?

Dynamic Programming is useful for solving problems that can be broken down into overlapping subproblems, meaning problems where the same subproblem appears multiple times. By storing the results of these subproblems (in a table, for example), we avoid recalculating the same thing multiple times, which improves efficiency.

#### When to use it?

You should consider using Dynamic Programming when:

- The problem can be divided into smaller subproblems.
- The subproblems repeat multiple times (i.e., there are overlapping subproblems).
- There is a recursive relationship between the subproblems, where the solution to one subproblem depends on the solution to others.

#### Common examples of problems that can be solved with DP:

- The Knapsack Problem
- The Longest Common Subsequence Problem
- The Rod Cutting Problem
- Fibonacci problems, among others.

### Why did we use DP in the "Coin Change" exercise?

In the "Coin Change" exercise, we want to find the fewest number of coins that add up to a specific value. This problem can be solved by breaking the original problem (how to make a certain amount) into smaller subproblems (how to make smaller amounts) and using the results of the subproblems to build the final solution.

**Dynamic Programming** is useful here because, by calculating the minimum number of coins for each value from 0 to the desired value, we can reuse these results to calculate the minimum number of coins needed for larger values. This avoids redundant calculations and makes the algorithm more efficient.

### What is Breadth-First Search (BFS)?

**Breadth-First Search (BFS)** is a search technique used in graphs and trees, where it explores all neighbors (i.e., all nodes/elements directly connected to the current node) before moving on to the neighbors of those neighbors. In other words, BFS explores the graph in "breadth" before descending to deeper levels.

#### When to use BFS?

BFS is useful for finding the shortest path in an unweighted graph (where all edges have the same weight). It is also used in problems that involve exploring all possible paths until finding the desired result.

#### Are we using BFS in the "Coin Change" algorithm?

Not directly. Although the exercise mentions BFS as a topic, the approach we used was based on **Dynamic Programming**. However, the solution can be abstractly related to BFS because, in an alternative scenario, we could use BFS to explore all possible combinations of coins in search of the shortest solution (i.e., the fewest number of coins). However, the Dynamic Programming approach is generally more efficient for this type of problem because it allows us to reuse subsolutions, which is not the case in traditional BFS.

# Commented Solution in Javascript

```Javascript []
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity); // Create an array to store the minimum coins needed for each amount
  dp[0] = 0; // Base case: 0 coins are needed to make amount 0

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      // Update the dp array for each amount from the coin value to the target amount
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Choose the minimum coins needed
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // Return the result for the target amount, or -1 if it's still Infinity (unreachable)
};
```

# Explanation of the strategy

1. **Dynamic Programming Array (`dp`):**
   - We create a `dp` array where `dp[i]` represents the minimum number of coins needed to make the amount `i`.
   - The array is initialized with `Infinity` because we want to find the minimum, and `Infinity` ensures that any real number will be smaller.
2. **Base Case:**
   - `dp[0] = 0`: It takes 0 coins to make the amount 0.
3. **Filling the `dp` Array:**
   - For each coin, we update the `dp` array starting from the coin's value up to the target amount.
   - The formula `dp[i] = Math.min(dp[i], dp[i - coin] + 1)` checks if using the current coin results in a smaller number of coins needed than the current value in `dp[i]`.
4. **Final Result:**
   - After processing all coins, if `dp[amount]` is still `Infinity`, it means the amount cannot be reached with the given coins, so we return `1`.
   - Otherwise, we return `dp[amount]`, which contains the minimum number of coins needed.

---

# Please UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️

and check it out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘

![image.png](https://assets.leetcode.com/users/images/57bce3b1-56e2-4c20-9cdf-b61fef26b93b_1725494158.6252415.png)
