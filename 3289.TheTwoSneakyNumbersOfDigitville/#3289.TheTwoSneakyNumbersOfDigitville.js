var getSneakyNumbers = function (nums) {
  let unique = [];
  let sneakies = [];

  for (let n of nums) {
    if (sneakies.length == 2) return sneakies;
    !unique.includes(n) ? unique.push(n) : sneakies.push(n);
  }

  return sneakies;
};
