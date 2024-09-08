var plusOne = function (digits) {
  // Traverse the array from the last digit to the first
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++; // Increment the current digit

    // If the digit becomes less than 10, no carry, return the array
    if (digits[i] < 10) {
      return digits;
    }

    // If the digit is 10, set it to 0 and carry over the 1
    digits[i] = 0;
  }

  // If we're out of the loop and all digits were 9, we need to add a new digit
  digits.unshift(1);

  return digits;
};
