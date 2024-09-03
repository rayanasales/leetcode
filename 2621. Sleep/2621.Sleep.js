function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

// Usage example
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // Outputs approximately 100ms
});
