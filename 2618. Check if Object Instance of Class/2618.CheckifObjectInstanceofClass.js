function checkIfInstanceOf(obj, classFunction) {
  if (obj === null || obj === undefined) return false;

  if (typeof classFunction !== "function") {
    return false;
  }

  if (typeof obj !== "object" && typeof obj !== "function") {
    obj = Object(obj);
  }

  return obj instanceof classFunction;
}
