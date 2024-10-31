var findWordsContaining = function (words, x) {
  let indexes = [];
  for (let i = 0; i < words.length; i++)
    if (words[i].indexOf(x) !== -1) indexes.push(i);
  return indexes;
};
