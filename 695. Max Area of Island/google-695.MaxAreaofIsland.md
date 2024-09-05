# 695. Max Area of Island

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

🪴 Difficulty: `Medium`

❤️ Leetcode Problem Description: [Max Area of Island - Problem - Description](https://leetcode.com/problems/max-area-of-island/)

❤️ Leetcode Solution by Rayana Sales: [Max Area of Island - Solution - Rayana Sales](https://leetcode.com/problems/max-area-of-island/solutions/5632171/detailed-explanation-max-area-of-island-solved/)

💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)

❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥

---

## Background: everything you need to know

### What is Depth-First Search (DFS)?

**DFS (Depth-First Search)** is an algorithm used to traverse or search through data structures like graphs or trees. The basic idea is to start at a node (or cell in the case of a grid/matrix) and explore as far as possible along each branch before backtracking. In the context of matrices (like the problem we're solving), DFS can be used to explore all the cells that are part of an "island" of `1`s.

### When to Use DFS?

DFS is particularly useful when you need to:

- **Explore or traverse** all elements in a graph or matrix structure.
- **Find connected components**, such as islands in a matrix where the cells are connected by some specific rule (in this case, `1` cells connected 4-directionally).

### Strategy to Solve the Problem

**Objective:** Find the largest area of an island in a 2D grid where `1` represents land and `0` represents water. An island is formed by `1`s connected horizontally or vertically (not diagonally).

**Steps:**

1. **Traverse the Grid:** We will go through each cell of the grid. Whenever we find a cell with `1` (part of an island), we need to calculate the area of that island.
2. **Use DFS:** When we find a `1`, we initiate a DFS to explore the entire island connected to that cell. The DFS will:
   - Mark the visited cells (by changing `1` to `0` so that we don't count them again).
   - Sum all connected cells that are also `1` to calculate the island's area.
3. **Compare Areas:** With each new island found, we compare its area with the largest area found so far. If it's larger, we update the maximum area value.

## Solution

```Javascript []
var maxAreaOfIsland = function (grid) {
  let maxArea = 0; // Stores the largest island area found so far
  let rows = grid.length; // Number of rows in the matrix
  let cols = grid[0].length; // Number of columns in the matrix

  // Depth-First Search (DFS) algorithm to perform depth search on an island
  const depthFirstSearch = (row, col) => {
    // Base case: Check if we are within the matrix boundaries or if the cell is already water (0)
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    grid[row][col] = 0; // Marks the current cell as visited by changing it to 0 (water).
    let islandSize = 1; // Starts the island size with 1 (the current cell)

    // Recursively visits all connected cells (up, down, left, right)
    islandSize += depthFirstSearch(row - 1, col); // Up
    islandSize += depthFirstSearch(row + 1, col); // Down
    islandSize += depthFirstSearch(row, col - 1); // Left
    islandSize += depthFirstSearch(row, col + 1); // Right

    return islandSize; // Returns the total size of this island
  };

  // Traverse each cell of the matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        // If the cell is land (1)
        let islandSize = depthFirstSearch(row, col); // Calculate the area of the current island
        maxArea = Math.max(maxArea, islandSize); // Update maxArea if this island is larger
      }
    }
  }

  return maxArea; // Returns the largest island area found
};
```

## Explanation of the code

### Why do we change `1` to `0` in DFS?

When we change `1` to `0` in DFS, we are basically indicating that we have already visited that cell. The reason we do this is to avoid counting the same cell more than once while calculating the island's area.

### But what if we want to know which cells were originally `1`?

By marking a cell as `0`, we do lose the original information that the cell was `1`. However, this isn't an issue for our approach for several reasons:

1. **Algorithm Objective:** Our goal is to find the largest area of an island. We no longer need the information about which cells were `1` after counting them because we are only interested in the size of the area. Once we have counted a cell, it is no longer relevant to the rest of the algorithm.
2. **Avoiding Duplicate Counts:** By marking the cell as `0`, we ensure that it won't be counted again if we come across a new island or continue the DFS. This prevents the island area from being overestimated.

### Why does this work?

After counting the area of an island, the important information is the number of connected cells (i.e., the area). We no longer need to know where the `1`s were because the total number of connected cells has already been recorded. Marking the cells as `0` prevents us from revisiting and counting the same island accidentally.

Steps Summary

- We mark cells as `0` during DFS to avoid duplicate counts and simplify the process.
- This change is safe because the focus of the algorithm is counting connected cells, not maintaining an exact history of where the `1`s were.
- If you need to preserve the original grid, you can make a copy before starting the DFS. However, remember that this copy consumes more memory and isn't necessary for the purpose of just finding the largest island.

---

# Please UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️

and check it out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘

![image.png](https://assets.leetcode.com/users/images/57bce3b1-56e2-4c20-9cdf-b61fef26b93b_1725494158.6252415.png)
