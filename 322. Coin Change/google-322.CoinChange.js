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
