var canPlaceFlowers = function (flowerbed, n) {
  let count = 0; // Initialize counter to track planted flowers
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty, the left neighbor (if any) is empty or the edge,
    // and the right neighbor (if any) is empty or the edge.
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // Plant the flower by marking the current plot as 1
      count++; // Increment the count of planted flowers
      if (count >= n) return true; // If we've planted enough flowers, return true
    }
  }
  // After traversing the entire flowerbed, check if we've planted enough flowers
  return count >= n;
};
