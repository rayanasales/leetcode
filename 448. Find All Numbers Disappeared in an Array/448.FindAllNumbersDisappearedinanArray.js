var findDisappearedNumbers = function (nums) {
  let size = nums.length + 1;
  let all = Array.apply(null, Array(size));
  let uniqNums = [...new Set(nums)];

  uniqNums.forEach((n) => (all[n] = n));

  let missingNums = [];
  for (let i = 1; i < size; i++) if (!all[i]) missingNums.push(i);

  return missingNums;
};
