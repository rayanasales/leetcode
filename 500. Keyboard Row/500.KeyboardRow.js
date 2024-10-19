var findWords = function (words) {
  // Create a mapping of each letter to its row number
  const rowMap = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
  };

  const output = [];

  // Loop through each word
  for (let word of words) {
    let lowerWord = word.toLowerCase();
    let firstRow = rowMap[lowerWord[0]]; // Get the row of the first character

    let canBeTyped = true;

    // Check if all characters in the word belong to the same row
    for (let i = 1; i < lowerWord.length; i++) {
      if (rowMap[lowerWord[i]] !== firstRow) {
        canBeTyped = false;
        break;
      }
    }

    // If word can be typed using one row, add it to the output
    if (canBeTyped) {
      output.push(word);
    }
  }

  return output;
};
