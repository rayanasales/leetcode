function isValid(s) {
  // Early exit for strings with odd lengths.
  // If the string length is odd, it can never be valid, so we immediately return false.
  if (s.length % 2 !== 0) return false;

  const stack = []; // Let's use a switch-case for quicker matching

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // We only push expected closing brackets onto the stack and immediately pop and check when encountering a closing bracket.
    // This reduces the number of operations needed.

    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (stack.length === 0 || stack.pop() !== char) return false;
    }
  }

  return stack.length === 0;
}
