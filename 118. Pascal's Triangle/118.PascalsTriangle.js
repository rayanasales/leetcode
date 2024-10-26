/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let output = [[1], [1, 1]]; // Base cases for the first two rows of Pascal's triangle
  if (numRows === 1) return [[1]];
  if (numRows === 2) return output;

  // Start generating rows from the 3rd row onward
  for (let rowIndex = 3; rowIndex <= numRows; rowIndex++) {
    let rowItems = Array(rowIndex); // create the row with length = rowIndex
    rowItems[0] = 1; // first item is always 1
    rowItems[rowIndex - 1] = 1; // last item is always 1

    // calculation for the in-between items (not first or last)
    for (let itemIndex = 1; itemIndex < rowIndex - 1; itemIndex++) {
      let rowAbove = rowIndex - 2; // Reference the row directly above in output (since arrays are 0-indexed)
      let valueAboveLeft = output[rowAbove][itemIndex - 1]; // The element to the left in the row above
      let valueAboveRight = output[rowAbove][itemIndex]; // The element directly above
      rowItems[itemIndex] = valueAboveLeft + valueAboveRight; // Sum the two values
    }

    output.push(rowItems); // Push the generated row into the output
  }
  return output;
};
