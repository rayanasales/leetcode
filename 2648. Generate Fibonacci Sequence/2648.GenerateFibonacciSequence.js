/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let current = 0; // First number in the Fibonacci sequence
  let next = 1; // Second number in the Fibonacci sequence

  while (true) {
    // Infinite loop to generate the sequence continuously
    yield current; // Return the current number in the sequence
    [current, next] = [next, current + next]; // Update `current` and `next` to the next two numbers in the sequence
  }
};

// Example usage:
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
