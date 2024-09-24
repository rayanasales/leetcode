var maxProfit = function (prices) {
  let minPrice = Infinity; // Track the minimum price so far
  let maxProfit = 0; // Track the maximum profit

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update minimum price if a lower price is found
    } else {
      // Calculate profit by selling on the current day and buying at minPrice
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit); // Update maxProfit if current profit is higher
    }
  }

  return maxProfit;
};
