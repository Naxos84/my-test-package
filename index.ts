const myFunctions = {
  sum(a: number, b: number) {
    console.log("my sum");
    return a + b;
  },

  subtract(a: number, b: number) {
    console.log("my subtraction");
    return a - b;
  },

  multiply(a: number, b: number) {
    console.log("my product");
    return a * b;
  },
  divide(a: number, b: number) {
    console.log("my division");
    return a / b;
  },
};

export = myFunctions;
