const assert = require("chai").assert;
const BloomFilter = require("../BloomFilter");

describe("BloomFilter", () => {
  describe("contains", () => {
    it("Should return true if there is a probability of member being in the storage", () => {
      let bloom = new BloomFilter(150);
      bloom.add("Tom");
      bloom.add("Jerry");
      bloom.add("Coyote");
      assert.equal(bloom.contains("coyote"), true);
    });
    it("Should return false if the member is not in the storage", () => {
      let bloom = new BloomFilter(150);
      bloom.add("Tom");
      bloom.add("Jerry");
      bloom.add("Coyote");
      assert.equal(bloom.contains("coyot"), false);
    });
  });

  describe("hashFunction", () => {
    it("Should return numerical (hashed) value of input", () => {
      let bloom = new BloomFilter(150);
      assert.typeOf(bloom._calculateHash("Tom", 150, -1), "number");
    });
    it("Should return different values for different seeds", () => {
      let bloom = new BloomFilter(150);
      assert.notEqual(
        bloom._calculateHash("Tom", 150, -1),
        bloom._calculateHash("Tom", 150, 1),
        "Expected $string hashed with seed = -1 to be different than $string hashed with seed = 1"
      );
    });
    it("Should return different hashes for different values using same seed", () => {
      let bloom = new BloomFilter(150);
      assert.notEqual(
        bloom._calculateHash("Tom", 150, -1),
        bloom._calculateHash("Jerry", 150, -1)
      );
    });
  });
});
