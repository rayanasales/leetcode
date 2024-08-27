var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = []; // Array to store results in the original order
    let completedPromises = 0; // Counter to track how many promises have been resolved

    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          results[i] = result; // Store result at the correct index
          completedPromises++; // Increment counter for each resolved promise
          if (completedPromises === functions.length) resolve(results); // If all promises are done, resolve with the results array
        })
        .catch(reject); // If any promise fails, reject immediately
    });
  });
};
