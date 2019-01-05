class BloomFilter {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size).fill(0, 0);
    this.seed = [-1, 0, -1];
  }

  add(str) {
    this.seed
      .map(mod => this._calculateHash(str, this.size, mod))
      .forEach(address => this._markAsOccupied(address));
  }

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
