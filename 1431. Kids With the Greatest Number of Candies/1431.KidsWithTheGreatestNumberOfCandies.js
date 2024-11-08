var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let biggestNumber = Math.max(...candies);
  for (let i = 0; i < candies.length; i++)
    result.push(candies[i] + extraCandies >= biggestNumber);
  return result;
};
