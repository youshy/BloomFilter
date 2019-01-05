/** Create instance of BloomFilter */
class BloomFilter {
  /**
   * Create instance of BloomFilter with storage
   * @param {number} size - define storage size
   */
  constructor(size) {
    this.size = size;
    this.storage = new Array(size).fill(0, 0);
    this.seed = [-1, 0, -1];
  }

  /**
   * Add new hashed member to the storage
   * @param {string} newMember - add new string
   */
  add(newMember) {
    this.seed
      .map(mod => this._calculateHash(newMember, this.size, mod))
      .forEach(address => this._markAsOccupied(address));
  }

  /**
   * Check if member is in the storage
   * @param {string} string - to check
   */
  contains(str) {
    return this.seed
      .map(mod => this._calculateHash(str, this.size, mod))
      .map(address => this._isOccupied(address))
      .reduce((acc, ele) => acc && ele, true);
  }

  _markAsOccupied(address) {
    this.storage[address] = 1;
  }

  _isOccupied(address) {
    return !!this.storage[address];
  }

  _calculateHash(str, size, mod) {
    const hash = str
      .split("")
      .map((ch, i) => (ch.charCodeAt() + mod * 1) * i + 1)
      .reduce((acc, ele) => acc + ele);
    return Math.floor(hash % size);
  }
}

module.exports = BloomFilter;
