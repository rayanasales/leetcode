var getRow = function (rowIndex) {
  let output = [[1], [1, 1]]; // Base cases: The first two rows of Pascal's Triangle
  if (rowIndex === 0 || rowIndex === 1) return output[rowIndex]; // Fixing the condition to check for both 0 and 1

  // Start generating rows from the 3rd row onward
  for (let i = 2; i <= rowIndex; i++) {
    // Start at 2 because we already have rows for 0 and 1
    let rowItems = Array(i + 1); // Create the row with length = i + 1
    rowItems[0] = 1; // The first element of every row is always 1
    rowItems[i] = 1; // The last element of every row is always 1

    // Calculation for the in-between items (those that aren't at the edges)
    for (let itemIndex = 1; itemIndex < i; itemIndex++) {
      let rowAbove = i - 1; // Reference the row directly above (because arrays are zero-indexed)
      let valueAboveLeft = output[rowAbove][itemIndex - 1]; // Get the value to the left in the row above
      let valueAboveRight = output[rowAbove][itemIndex]; // Get the value directly above
      rowItems[itemIndex] = valueAboveLeft + valueAboveRight; // The sum of the two values above gives the current value
    }

    output.push(rowItems); // Append the newly generated row to the output
  }

  return output[rowIndex]; // Return the desired row
};
