function climbStairs(n) {
  // Base cases: if there is only 1 or 2 steps, the number of ways to climb is equal to n
  if (n === 1) return 1;
  if (n === 2) return 2;

  // Initialize two variables to represent the number of ways to reach the previous two steps
  let first = 1; // This represents the number of ways to reach the (n-2)th step
  let second = 2; // This represents the number of ways to reach the (n-1)th step

  // Start iterating from the 3rd step up to the nth step
  for (let i = 3; i <= n; i++) {
    // Calculate the number of ways to reach the current step (i) by summing the ways
    // to reach the last two steps (i-1 and i-2)
    const third = first + second;

    // Update the values of first and second for the next iteration
    // Now, 'first' will be the number of ways to reach the (i-1)th step
    // and 'second' will be the number of ways to reach the ith step
    first = second;
    second = third;
  }

  // After the loop, 'second' contains the number of ways to reach the nth step
  return second;
}
