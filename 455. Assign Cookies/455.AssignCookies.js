var findContentChildren = function (kids, cookies) {
  // Step 1: Sort both arrays in ascending order
  kids.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let childPointer = 0;
  let cookiePointer = 0;

  // Step 2: Use two-pointer technique to assign cookies
  while (childPointer < kids.length && cookiePointer < cookies.length) {
    if (cookies[cookiePointer] >= kids[childPointer]) {
      // Step 3: If the cookie satisfies the child, move to the next child
      childPointer++;
    }
    // Step 4: Move to the next cookie in both cases
    cookiePointer++;
  }

  // Step 5: Return the number of children that have been satisfied
  return childPointer;
};
