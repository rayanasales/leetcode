var expect = function (val) {
  function toBe(sencondVal) {
    if (val === sencondVal) return true;

    throw new Error("Not Equal");
  }
  function notToBe(sencondVal) {
    if (val !== sencondVal) return true;

    throw new Error("Equal");
  }

  return {
    toBe,
    notToBe,
  };
};

/**
 * Usage example:
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
