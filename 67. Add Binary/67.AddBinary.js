var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  // Loop through both strings from the end to the beginning
  while (i >= 0 || j >= 0) {
    // Get the current digit from each string, or 0 if index is out of bounds
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += b[j--] - "0";

    result = (sum % 2) + result; // Append the sum modulo 2 to the result (this is the current binary digit)
    carry = Math.floor(sum / 2); // Update carry for the next iteration
  }

  if (carry > 0) {
    result = "1" + result; // If there's a carry left after the last addition, append it
  }

  return result;
};
