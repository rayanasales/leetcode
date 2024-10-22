var fairCandySwap = function (aliceSizes, bobSizes) {
  // Calculate total candies for Alice and Bob
  let totalAlice = aliceSizes.reduce((a, b) => a + b, 0);
  let totalBob = bobSizes.reduce((a, b) => a + b, 0);

  // Calculate the difference (NOT absolute value!)
  let diff = (totalAlice - totalBob) / 2;

  // Use a Set for Bob's sizes for faster lookup
  let bobSet = new Set(bobSizes);

  // Find the correct pair (a, b)
  for (let a of aliceSizes) {
    let b = a - diff; // Based on equation a = b + diff
    if (bobSet.has(b)) return [a, b];
  }

  return [];
};
