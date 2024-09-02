var fib = function (targetN, memo = {}) {
  if (targetN === 0) return 0;
  if (targetN === 1) return 1;

  if (memo[targetN]) return memo[targetN];

  memo[targetN] = fib(targetN - 1, memo) + fib(targetN - 2, memo);

  return memo[targetN];
};
