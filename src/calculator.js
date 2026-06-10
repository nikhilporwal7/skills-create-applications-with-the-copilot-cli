#!/usr/bin/env node
/*
  Simple Node.js CLI Calculator

  Supported operations:
  - addition: add, +
  - subtraction: subtract, -
  - multiplication: multiply, *
  - division: divide, /

  Usage examples:
    node src/calculator.js add 2 3       # outputs: 5
    node src/calculator.js subtract 5 2  # outputs: 3
    node src/calculator.js multiply 4 6  # outputs: 24
    node src/calculator.js divide 8 2    # outputs: 4
*/

'use strict';

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add(+), subtract(-), multiply(*), divide(/)');
}

function main(argv) {
  const op = argv[2];
  const aRaw = argv[3];
  const bRaw = argv[4];

  if (!op || aRaw === undefined || bRaw === undefined) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const a = toNumber(aRaw);
  const b = toNumber(bRaw);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both operands must be valid numbers.');
    process.exitCode = 2;
    return;
  }

  let result;
  try {
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'times':
      case '*':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
        result = divide(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printUsage();
        process.exitCode = 1;
        return;
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exitCode = 3;
    return;
  }

  // Print the result to stdout
  console.log(result);
}

if (require.main === module) {
  main(process.argv);
}

module.exports = { add, subtract, multiply, divide };
