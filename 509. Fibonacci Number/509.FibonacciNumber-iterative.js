var fib = function (targetN) {
  let currentN = 1;
  let fib = [0, 1];

  if (targetN === 0) return 0;

  while (currentN < targetN) {
    currentN++;
    let lastIndex = fib.length - 1;
    let penultimateIndex = fib.length - 2;
    let fibSequence = fib[penultimateIndex] + fib[lastIndex];
    fib.push(fibSequence);
  }

  return fib.pop();
};
