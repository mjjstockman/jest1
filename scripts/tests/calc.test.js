// import the function to test from calc.js
// assign this to a const so can't accidently change it
// const addition = require("../calc");

// // top level parent describe as Calculator
// describe("Calculator", () => {
//     // second level describe for addition function
//     describe("Addition function", () => {
//         // test method with a description of "should return 42...."
//         test("should return 42 for 20 + 22", () => {
//             // expect result of calling function
//             expect(addition(20, 22)).toBe(42);
//         })
//     });
// })

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
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});