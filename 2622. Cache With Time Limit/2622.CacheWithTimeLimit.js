class TimeLimitedCache {
  constructor() {
    // Store the cache as a map where the key is the provided key and the value is an object
    // containing the actual value and the expiration timestamp.
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;

    // Check if the key already exists and if it is unexpired
    const existsAndUnexpired =
      this.cache.has(key) && this.cache.get(key).expirationTime > currentTime;

    // Set the new value and expiration time
    this.cache.set(key, { value: value, expirationTime: expirationTime });

    return existsAndUnexpired;
  }

  get(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
      const entry = this.cache.get(key);

      if (entry.expirationTime > currentTime) {
        return entry.value;
      } else {
        // If the key is expired, remove it from the cache
        this.cache.delete(key);
      }
    }

    return -1;
  }

  count() {
    const currentTime = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
      if (entry.expirationTime > currentTime) {
        count++;
      } else {
        // Clean up expired keys
        this.cache.delete(key);
      }
    }

    return count;
  }
}
