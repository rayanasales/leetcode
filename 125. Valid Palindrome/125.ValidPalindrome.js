var isPalindrome = function (s) {
  let sanitized = "";

  for (let i = 0; i < s.length; i++)
    if (isAlphaNumeric(s[i])) sanitized += s[i].toLowerCase();

  let reversed = [...sanitized].reverse().join("");
  return sanitized === reversed;
};

function isAlphaNumeric(char) {
  if (/[^a-zA-Z0-9]/.test(char)) {
    return false;
  }
  return true;
}
