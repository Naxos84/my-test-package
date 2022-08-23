"use strict";
const myFunctions = {
    sum(a, b) {
        console.log("my sum");
        return a + b;
    },
    subtract(a, b) {
        console.log("my subtraction");
        return a - b;
    },
    multiply(a, b) {
        console.log("my product");
        return a * b;
    },
    divide(a, b) {
        console.log("my division");
        return a / b;
    },
};
module.exports = myFunctions;
