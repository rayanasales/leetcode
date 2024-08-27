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
