class MyHashSet {
  constructor() {
    // Initialize the hash set with an array of buckets.
    // Each bucket is an empty array (list) that will hold multiple keys in case of hash collisions.
    this.buckets = new Array(769); // 769 is a prime number to minimize collisions.

    // Initialize each bucket as an empty list (array).
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }
  }

  // This function computes the bucket index for a given key.
  // It ensures that the key is mapped to an index between 0 and 768.
  _hash(key) {
    return key % 769;
  }

  /*
   * Adds the key to the hash set.
   * @param {number} key - The key to be added.
   */
  add(key) {
    // Get the bucket index for this key.
    const bucketIndex = this._hash(key);

    // Get the bucket (list of keys) at the computed index.
    const bucket = this.buckets[bucketIndex];

    // Only add the key if it's not already in the bucket.
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
  }

  /*
   * Removes the key from the hash set.
   * @param {number} key - The key to be removed.
   */
  remove(key) {
    // Get the bucket index for this key.
    const bucketIndex = this._hash(key);

    // Get the bucket (list of keys) at the computed index.
    const bucket = this.buckets[bucketIndex];

    // Find the index of the key in the bucket.
    const keyIndex = bucket.indexOf(key);

    // If the key is found (index != -1), remove it from the bucket.
    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
    }
  }

  /*
   * Checks if the key exists in the hash set.
   * @param {number} key - The key to check for existence.
   * @return {boolean} - True if the key exists, false otherwise.
   */
  contains(key) {
    // Get the bucket index for this key.
    const bucketIndex = this._hash(key);

    // Get the bucket (list of keys) at the computed index.
    const bucket = this.buckets[bucketIndex];

    // Return true if the key is found in the bucket, false otherwise.
    return bucket.includes(key);
  }
}

/*
 * Usage:
 * var obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * var param_3 = obj.contains(key);
 */
