var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  // Iterate through the Roman numeral string character by character.
  for (let i = 0; i < s.length; i++) {
    // Retrieve the integer value of the current Roman numeral.
    let currentValue = romanMap[s[i]];
    let nextValue = romanMap[s[i + 1]];

    // Check if the current value is less than the next value.
    // If true, this indicates a subtractive combination (like 'IV' or 'IX') - rule from roman numbers.
    // so we subtract the current value from the total.
    if (currentValue < nextValue) {
      total -= currentValue; //
    } else {
      // Otherwise, add the current value to the total.
      // This handles the standard additive case where numerals are in descending order.
      total += currentValue;
    }
  }

  return total;
};
