/**
 * @jest-environment jsdom
 */

let addition = (num1, num2) => num1 + num2;

// export the function so the require statement in test file will work
module.exports = addition;

// mocking
