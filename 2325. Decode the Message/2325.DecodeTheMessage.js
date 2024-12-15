var decodeMessage = function (key, message) {
  key = Array.from(new Set(key.split(" ").join("")));
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const hash = new Map();
  let result = "";
  for (let i = 0; i < alpha.length; i++) hash.set(key[i], alpha[i]);
  for (let chr of message) result += hash.get(chr) || " ";
  return result;
};
