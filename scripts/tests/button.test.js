/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

// USING A MOCK OF THE DOM
// jest directive before each
// runs before each test is run

// beforeEach(() => {
//     let fs = require("fs"); 
//     // set innerHTML of body
//     // only need to mock the part of the HTML that is being tested
//     document.body.innerHTML = "<p id='par'></p>"
// });

// save index html before each test is run
beforeEach(() => {
    // file system module built in with node
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        // call the buttonClick function
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        // get all elements with h1 tag and store in special array
        // length will be the number of elements in the array
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});