var cancellable = function (fn, args, t) {
  let intervalId; // This will hold the ID of the interval

  const cancelFn = () => {
    clearInterval(intervalId); // Stops the interval
  };

  fn(...args); // Call the function immediately with the provided arguments

  intervalId = setInterval(() => {
    fn(...args); // Repeats the function call every `t` milliseconds
  }, t);

  return cancelFn; // Returns the function that can stop the interval
};
