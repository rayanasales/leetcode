# 20. Valid Parentheses

### I GOT THIS CHALLENGE ON A GOOGLE INTERVIEW 🆘⚠️🚨S🛟S

**_🪴 Difficulty: `Easy`_**

**_❤️ Leetcode Problem Description: [Valid Parentheses - Problem - Description](https://leetcode.com/problems/valid-parentheses/description/)_**

**_❤️ Leetcode Solution by Rayana Sales: [Valid Parentheses - Solution - Rayana Sales](https://leetcode.com/problems/valid-parentheses/solutions/5645928/runtime-45-ms-beats-97-68-javascript-solution-explanation/)_**

**_💁🏻‍♀️ All my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode)_**

**_❤️‍🔥❤️‍🔥❤️‍🔥 If it's help, please up 🔝 vote! ❤️‍🔥❤️‍🔥❤️‍🔥_**

---

## Commented Solution in Javascript

```js
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
```

## Example to Illustrate

### **Case 1: Consider the string `s = "(]"`.**

1. The first character `(` is an opening bracket, so we push `)` (the expected closing bracket) onto the stack.

   Stack after first iteration: `[')']`

2. The second character `]` is a closing bracket.
   - The stack is not empty, so we pop the last element from the stack, which is `)`.
   - We then compare `)` with `]`. Since they don't match, `stack.pop() !== char` evaluates to true, so we return `false`.

This logic ensures that every closing bracket matches the most recent unmatched opening bracket, preserving the correct nesting order.

### **Case 2: Consider the string `s = "()"`**

1. **First Character: `(`**

   - It's an opening bracket, so we push `)` (the expected closing bracket) onto the stack.

   Stack after first iteration: `[')']`

2. **Second Character: `)`**

   - It's a closing bracket.
   - We check if the stack is empty (it's not).
   - We pop the top element from the stack, which is `)`.
   - We compare `)` with the current character `)`. They match, so we continue.

   Stack after second iteration: `[]`

   The stack is now empty, and we've processed all characters. The input string is valid, so the output is `true`.

### **Case 3: Consider the string `s = "()[]{}"`**

1. **First Character: `(`**

   - It's an opening bracket, so we push `)` onto the stack.

   Stack after first iteration: `[')']`

2. **Second Character: `)`**

   - It's a closing bracket.
   - The stack is not empty, so we pop `)` from the stack and compare it with the current character `)`. They match, so we continue.

   Stack after second iteration: `[]`

3. **Third Character: `[`**

   - It's an opening bracket, so we push `]` onto the stack.

   Stack after third iteration: `[']']`

4. **Fourth Character: `]`**

   - It's a closing bracket.
   - The stack is not empty, so we pop `]` from the stack and compare it with the current character `]`. They match, so we continue.

   Stack after fourth iteration: `[]`

5. **Fifth Character: `{`**

   - It's an opening bracket, so we push `}` onto the stack.

   Stack after fifth iteration: `['}']`

6. **Sixth Character: `}`**

   - It's a closing bracket.
   - The stack is not empty, so we pop `}` from the stack and compare it with the current character `}`. They match, so we continue.

   Stack after sixth iteration: `[]`

   The stack is now empty, and we've processed all characters. The input string is valid, so the output is `true`.

### **Case 4: Consider the string `s = "{[]}"`**

1. **First Character: `{`**

   - It's an opening bracket, so we push `}` onto the stack.

   Stack after first iteration: `['}']`

2. **Second Character: `[`**

   - It's an opening bracket, so we push `]` onto the stack.

   Stack after second iteration: `['}', ']']`

3. **Third Character: `]`**

   - It's a closing bracket.
   - The stack is not empty, so we pop `]` from the stack and compare it with the current character `]`. They match, so we continue.

   Stack after third iteration: `['}']`

4. **Fourth Character: `}`**

   - It's a closing bracket.
   - The stack is not empty, so we pop `}` from the stack and compare it with the current character `}`. They match, so we continue.

   Stack after fourth iteration: `[]`

   The stack is now empty, and we've processed all characters. The input string is valid, so the output is `true`.

---

# **_HOPE YOU ENJOYED MY EXPLANATION. UPVOTE if this was helpful 🔝🔝🔝❤️❤️❤️_**

## **_Check out all my solved LeetCode problems on GitHub: [rayanasales/leetcode](https://github.com/rayanasales/leetcode) 🤙😚🤘_**
