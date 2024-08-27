var compactObject = function (obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject); // If the object is an array, filter out falsy values, then recursively compact the array elements
  if (typeof obj !== "object") return obj; // If the object is a primitive value (not an object or array), return it as is

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]); // Recursively compact the value associated with the key
    if (Boolean(value)) compacted[key] = value; // If the compacted value is truthy, add it to the compacted object
  }
  return compacted;
};
