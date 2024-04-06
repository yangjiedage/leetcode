class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }
 
  get(key) {
    if (!this.cache.has(key)) return undefined;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
 
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

const map1 = new Map();

map1.set('name', '111');
map1.set('name2', '222');

const keyI = map1.keys();
console.log(keyI.next().value);
console.log(keyI.next().value)