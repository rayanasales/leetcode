# 575. Distribute Candies

## Found at

[Interview Prep – Google Tech Dev Guide](https://techdevguide.withgoogle.com/paths/interview/?programming_languages=javascript)

## Leetcode link

[Distribute Candies - LeetCode](https://leetcode.com/problems/distribute-candies/description/)

## Solution

```js
var distributeCandies = function (candyType) {
  const uniqueCandies = new Set(candyType).size; // Get the total number of unique candy types
  const maxCandies = candyType.length / 2; // Calculate the maximum number of candies Alice can eat, which is half the total number of candies
  return Math.min(uniqueCandies, maxCandies); // Return the minimum between the unique types and the maximum candies Alice can eat
};
```

## Explanation

1. **Unique Candy Types**: We use a `Set` to find out how many unique types of candies there are. The `Set` automatically removes duplicates, so its size gives us the number of unique candy types.
2. **Maximum Candies Alice Can Eat**: According to the problem, Alice can eat `n / 2` candies, where `n` is the total number of candies.
3. **Return the Result**: Alice can eat either the number of unique candy types or the maximum candies she is allowed to eat, whichever is smaller. This is done using the `Math.min` function.

### What is a `Set`?

In JavaScript, a `Set` is a built-in object that allows you to store unique values of any type, whether primitive values like numbers or strings, or even object references. Unlike arrays, which can contain duplicate values, a `Set` automatically filters out duplicate values, ensuring that each value in the collection is unique.

### Why Use `Set` in This Problem?

In the context of this problem, you want to determine the number of unique types of candies Alice has. Since a `Set` inherently removes duplicates, it is the perfect tool to count unique items:

1. **Uniqueness**: When you insert elements into a `Set`, it automatically removes duplicates. For example, if you have an array `[1, 1, 2, 2, 3, 3]` and put it into a `Set`, it becomes `{1, 2, 3}`. This gives you the unique types of candies without any extra work.
2. **Efficiency**: Using a `Set` is more efficient for counting unique values compared to using an array. With an array, you would need to manually check if each element has been added before, which typically involves searching through the array (increasing time complexity). A `Set` does this for you in constant time.

### Why Not Just Use an Array?

If we used an array to store unique types of candies, we would need to manually check for duplicates before adding each candy type to the array. This would involve iterating over the array each time, leading to a less efficient solution with higher time complexity, especially as the number of candies grows.

### Summary:

- **Set**: Automatically handles uniqueness, leading to cleaner and more efficient code.
- **Array**: Would require additional checks and operations to ensure uniqueness, which would make the code more complex and potentially slower.

In this problem, the `Set` simplifies the process of finding the number of unique candy types, making it the ideal choice.

## Leetcode post

[Distribute Candies - LeetCode](https://leetcode.com/problems/distribute-candies/solutions/5640796/simple-beginner-friendly-575-distribute-candies/)
