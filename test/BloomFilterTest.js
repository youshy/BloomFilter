const assert = require("chai").assert;
const BloomFilter = require("../BloomFilter");

const bloom = new BloomFilter(150);

describe("BloomFilter", () => {
  describe("add", () => {
    it("Should add member to storage", () => {
      bloom.add("Tom");
      assert.equal(bloom.contains("Tom"), true);
    });
  });

  describe("contains", () => {
    it("Should return true if there is a probability of member being in the storage", () => {
      bloom.add("Tom");
      bloom.add("Jerry");
      bloom.add("Coyote");
      assert.equal(bloom.contains("coyote"), true);
    });
    it("Should return false if the member is not in the storage", () => {
      bloom.add("Tom");
      bloom.add("Jerry");
      bloom.add("Coyote");
      assert.equal(bloom.contains("coyot"), false);
    });
  });

  describe("hashFunction", () => {
    it("Should return numerical (hashed) value of input", () => {
      assert.typeOf(bloom._calculateHash("Tom", 150, -1), "number");
    });
  });
});
