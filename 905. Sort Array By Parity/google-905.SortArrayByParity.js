var sortArrayByParity = function (nums) {
  let evens = [];
  let odds = [];
  nums.forEach((n) => (n % 2 === 0 ? evens.push(n) : odds.push(n)));
  return [...evens, ...odds];
};
