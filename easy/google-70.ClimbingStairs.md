# 70. Climbing Stairs

## Found at (page 2)

[Resource Library – Google Tech Dev Guide](https://techdevguide.withgoogle.com/resources/?programming_languages=javascript&types=coding-question)

## Leetcode link

[Climbing Stairs - LeetCode](https://leetcode.com/problems/climbing-stairs/)

## Code with Detailed Comments

```javascript
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
```

## Step-by-Step Debugging and Explanation

1. **Base Cases Handling**:

   - The code first handles the simplest cases directly:
     - If `n = 1`: There is only 1 way to reach the top (just one step), so it returns 1.
     - If `n = 2`: There are 2 ways to reach the top (either two 1-steps or one 2-step), so it returns 2.

2. **Initialization**:

   - We initialize two variables, `first` and `second`:
     - `first = 1` (this represents the number of ways to reach the second last step, i.e., `(n-2)th step`).
     - `second = 2` (this represents the number of ways to reach the last step, i.e., `(n-1)th step`).

3. **Iterating through Steps**:

   - Starting from the 3rd step (`i = 3`) up to the nth step:
     - The loop calculates the number of ways to reach the current step `i` by adding the number of ways to reach the previous two steps:
       - `third = first + second`: This adds the number of ways to reach the `(i-1)th step` and `(i-2)th step`.
     - The variables `first` and `second` are then updated for the next iteration:
       - `first = second`: Move `second` to `first`, representing the number of ways to reach the `(i-1)th step`.
       - `second = third`: Move `third` to `second`, representing the number of ways to reach the current `ith step`.
   - This loop continues until we have calculated the number of ways to reach the nth step.

4. **Final Return**:
   - After the loop completes, the variable `second` holds the number of distinct ways to reach the nth step. This value is returned as the result.

### Why This Code Works:

- **Fibonacci-Like Sequence**: The problem is akin to generating a Fibonacci sequence, where each number (i.e., the number of ways to reach a step) is the sum of the previous two numbers.
- **Iterative Approach**: The code uses an iterative approach with two variables to track the number of ways to reach the last two steps, which is highly efficient both in terms of time (O(n)) and space (O(1)).

## Example Debugging (n = 5)

- **Initialization**:

  - `first = 1`, `second = 2`

- **Iteration 1** (`i = 3`):

  - `third = first + second = 1 + 2 = 3`
  - Update: `first = second = 2`, `second = third = 3`
  - Now, `first = 2`, `second = 3`

- **Iteration 2** (`i = 4`):

  - `third = first + second = 2 + 3 = 5`
  - Update: `first = second = 3`, `second = third = 5`
  - Now, `first = 3`, `second = 5`

- **Iteration 3** (`i = 5`):

  - `third = first + second = 3 + 5 = 8`
  - Update: `first = second = 5`, `second = third = 8`
  - Now, `first = 5`, `second = 8`

- **Final Return**:
  - Return `second` which is `8`.

## Leetcode post

Simple, beginner friendly 🎯💯❤️‍🔥🏆🥇 Javascript solution & explanation ❤️❤️❤️

[Climbing Stairs - LeetCode](https://leetcode.com/problems/climbing-stairs/solutions/5647628/simple-beginner-friendly-javascript-solution-explanation/)
