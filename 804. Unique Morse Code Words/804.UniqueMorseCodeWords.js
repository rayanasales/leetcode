var uniqueMorseRepresentations = function (words) {
  let transformations = new Set(); // Set for faster lookups and automatic uniqueness
  const alphabetToMorseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  for (let word of words) {
    let transformation = "";
    for (let char of word) {
      transformation += alphabetToMorseCode[char];
    }
    transformations.add(transformation); // Set automatically handles duplicates
  }

  return transformations.size;
};
