Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueKey = Symbol(); // Create a unique symbol to avoid conflicts
  context[uniqueKey] = this; // Temporarily assign the function to the context using the unique key
  const result = context[uniqueKey](...args); // Call the function with the provided arguments
  delete context[uniqueKey]; // Clean up: remove the temporary function from the context
  return result; // Return the result of the function call
};
