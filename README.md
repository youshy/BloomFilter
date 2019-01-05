# BloomFilter

Quick implementation of [Bloom Filter](https://en.wikipedia.org/wiki/Bloom_filter) built using NodeJS.

## How to run

1. Make sure that you have [NodeJS](https://nodejs.org/en/) on your machine
2. git clone this repository
3. use BloomFilter.js in your app by importing it to the file:

```javascript
const BloomFilter = require("./BloomFilter");
```

## How to test

1. Run below in your console

```javascript
  npm test
```

## Technologies used

NodeJS and Mocha/Chai for testing.

## Q & A

<b>Q</b>: What's the advantage of using bloom filter?

<b>A</b>: As Bloom filter does not require to store the actual data in the storage, it has very big space advantage - as everything is stored using binary values. And also - it's fast. Really.

---

<b>Q</b>: Okay, but what about false positives?

<b>A</b>: Probabilty of false positives can be minimalized by optimizing numbers of hash functions.

---

<b>Q</b>: Does the bloom filter tells me for sure if I have my thing in the storage?

<b>A</b>: Well, no. It just tell that it might be there or it's definitely not there.

---

<b>Q</b>: Which hash function have you used in this implementation?

<b>A</b>: Nothing fancy - Input string is splitted, then mapped each character code from UTF-16 and summed the numerical value of input string.

---

<b>Q</b>: How could I use different hash function?

<b>A</b>: Simple - change \_calculateHash in BloomFilter.js

---

<b>Q</b>: Why haven't you implemented hashing function such as Murmurhash or FNV? You can find it all over the internet!

<b>A</b>: Well, I wanted to have my own solution for this one rather than copying algorithm somewhere from the internet. And this way, you can use your own algorithm if you only want to!

---

<b>Q</b>: What's the computional complexity of your solution (or big O notation)?

<b>A</b>: O(n)

---

<b>Q</b>: Why there is no input validation? I wanted to add a number and it's all broken?!

<b>A</b>: As I did not want to get super deep into input validation, right now the only correct datatype usable in my solution is a string. This is rather simple to implement.

---

<b>Q</b>: Have you ever implemented Bloom filter before?

<b>A</b>: No! But it's really really fun and I can see how you can expand it further to make it nice, secure, fast and fun.
