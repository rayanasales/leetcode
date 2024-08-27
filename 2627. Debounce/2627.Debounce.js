var debounce = function (fn, t) {
  let timeout;

  return function (...args) {
    // If there is an existing timeout, it is cleared.
    // This ensures that the previous timer is cancelled if the function is called again within the debounce time.
    if (timeout) clearTimeout(timeout);

    // A new timeout is set for the debounce time t.
    // When the timeout completes, the function fn is called with the arguments (args)
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
