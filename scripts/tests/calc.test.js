/**
 * @jest-environment jsdom
 */


// import the function to test from calc.js
// assign this to a const so can't accidently change it
const addition = require("../calc.js");
// top level parent describe as Calculator
describe("Calculator", () => {
    describe("Addition function", () => {
        // test method with a description of "should return 42...."
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 10 for 2 + 8", () => {
            expect(addition(2, 8)).toBe(10);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});