# 100. Same Tree

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

**_🪴 Difficulty: `Easy`_**

**_❤️ Leetcode Problem Description: [Same Tree - Problem - Description](https://leetcode.com/problems/same-tree/description/)_**

**_❤️ Leetcode Solution by Rayana Sales: [Same Tree - Solution - Rayana Sales](https://leetcode.com/problems/same-tree/solutions/5643019/simple-beginner-friendly-100-same-tree/)_**

**_💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)_**

**_❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥_**

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

### Why did we use DP in the "Same Tree" exercise?

In the "Same Tree" exercise, we want to determine if two binary trees are identical. This problem can be solved by recursively comparing the nodes of both trees. Although this specific problem does not use Dynamic Programming, understanding recursive problem-solving techniques is crucial for more complex DP problems.

### What is Breadth-First Search (BFS)?

**Breadth-First Search (BFS)** is a search technique used in graphs and trees, where it explores all neighbors (i.e., all nodes/elements directly connected to the current node) before moving on to the neighbors of those neighbors. In other words, BFS explores the graph in "breadth" before descending to deeper levels.

#### When to use BFS?

BFS is useful for finding the shortest path in an unweighted graph (where all edges have the same weight). It is also used in problems that involve exploring all possible paths until finding the desired result.

#### Are we using BFS in the "Same Tree" algorithm?

Not directly. The "Same Tree" problem is solved using a recursive approach rather than BFS. However, BFS can be used in tree problems where level-order traversal is required.

# Commented Solution in Javascript

```javascript
var isSameTree = function (p, q) {
  // Base case 1: Both nodes are null, which means we have reached the end of the tree in both cases, so they are the same.
  if (!p && !q) return true;

  // Base case 2: One node is null and the other isn't, which means the trees differ in structure, so they are not the same.
  if (!p || !q) return false;

  // Base case 3: Both nodes are not null, but their values differ, so the trees are not the same.
  if (p.val !== q.val) return false;

  // Recursive case: Check the right subtree and the left subtree.
  // Both subtrees must be the same for the trees to be considered identical.
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
```

---

# **_HOPE YOU ENJOYED MY EXPLANATION. UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️_**

## **_Check out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘_**
