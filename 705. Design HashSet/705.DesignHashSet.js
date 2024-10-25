class MyHashSet {
  constructor() {
    this.set = {};
  } // Initialize an empty object to store keys
  add(key) {
    this.set[key] = true;
  } // Set the key to true to mark its presence
  contains(key) {
    return this.set[key] === true;
  } // Return true if key is present, otherwise false
  remove(key) {
    delete this.set[key];
  } // Remove the key from the set if it exists
}

/**
 * Usage example:
 * var myHashSet = new MyHashSet();
 * myHashSet.add(1);       // Adds key 1
 * myHashSet.add(2);       // Adds key 2
 * console.log(myHashSet.contains(1));  // Returns true (1 is in the set)
 * console.log(myHashSet.contains(3));  // Returns false (3 is not in the set)
 * myHashSet.remove(2);    // Removes key 2
 * console.log(myHashSet.contains(2));  // Returns false (2 has been removed)
 */
