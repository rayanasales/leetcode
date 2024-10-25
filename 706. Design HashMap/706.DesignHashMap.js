class MyHashMap {
  constructor() {
    this.map = {};
  }
  put(key, value) {
    this.map[key] = value;
  }
  get(key) {
    if (this.map[key] || this.map[key] === 0) return this.map[key];
    else return -1;
  }
  remove(key) {
    delete this.map[key];
  }
}
