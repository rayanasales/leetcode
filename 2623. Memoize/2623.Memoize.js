function memoize(fn) {
  // Create a cache using Map to store results of function calls
  const cache = new Map();

  // Initialize a variable to keep track of how many times the original function is called
  let callCount = 0;

  function memoizedFunction(...args) {
    // Create a unique key for the arguments using JSON.stringify
    const key = JSON.stringify(args);

    // Check if the result for these arguments is already in the cache
    if (cache.has(key)) {
      // If found in the cache, return the cached result
      return cache.get(key);
    } else {
      // If not found in the cache, increment the call count
      callCount += 1;

      // Call the original function with the arguments to get the result
      const result = fn(...args);

      // Store the result in the cache with the generated key
      cache.set(key, result);

      // Return the newly computed result
      return result;
    }
  }

  // Add a method to the memoized function to retrieve the call count
  memoizedFunction.getCallCount = function () {
    return callCount;
  };

  // Return the memoized function
  return memoizedFunction;
}
