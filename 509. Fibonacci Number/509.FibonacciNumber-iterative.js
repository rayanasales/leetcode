var fib = function (targetN) {
  let currentN = 1;
  let a = 0,
    b = 1;

  if (targetN === 0) return 0;

  for (let i = 2; i <= targetN; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};
