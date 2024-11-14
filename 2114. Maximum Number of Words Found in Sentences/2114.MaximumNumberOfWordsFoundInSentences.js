var mostWordsFound = function (sentences) {
  let maximumNumberOfWords = 0;
  for (let sentence of sentences) {
    let words = sentence.split(" ").length;
    maximumNumberOfWords = Math.max(words, maximumNumberOfWords);
  }
  return maximumNumberOfWords;
};
