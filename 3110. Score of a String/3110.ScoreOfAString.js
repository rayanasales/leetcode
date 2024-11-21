var scoreOfString = function (word) {
  let score = 0;

  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) return score;

    let currentAscii = word[i].charCodeAt(0);
    let nextAscii = word[i + 1].charCodeAt(0);
    score += Math.abs(currentAscii - nextAscii);
  }
};
