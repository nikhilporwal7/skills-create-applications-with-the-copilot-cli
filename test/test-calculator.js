#!/usr/bin/env node
/*
  Tests for the simple Node.js CLI Calculator
  Exercises the four basic operations shown in the image:
  - 2 + 3
  - 10 - 4
  - 45 * 2
  - 20 / 5
*/

'use strict';

const assert = require('assert');
const { add, subtract, multiply, divide } = require('../src/calculator');

function runTests() {
  try {
    // Examples from the image
    assert.strictEqual(add(2, 3), 5, 'add(2,3) should be 5');
    assert.strictEqual(subtract(10, 4), 6, 'subtract(10,4) should be 6');
    assert.strictEqual(multiply(45, 2), 90, 'multiply(45,2) should be 90');
    assert.strictEqual(divide(20, 5), 4, 'divide(20,5) should be 4');

    // Division by zero should throw
    let threw = false;
    try {
      divide(1, 0);
    } catch (e) {
      threw = true;
    }
    assert.strictEqual(threw, true, 'divide(1,0) should throw');

    console.log('All calculator tests passed');
    process.exitCode = 0;
  } catch (err) {
    console.error('Test failed:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}

if (require.main === module) runTests();

module.exports = { runTests };
