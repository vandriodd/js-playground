// Arrow functions provide a shorter syntax for writing functions
// and also offer more predictable behavior with the this keyword
// They are useful fro writing concise, anonymous functions

// Traditional function declaration
const add1 = function (a, b) {
  return a + b;
};

// But, ✨ Arrow function ✨
const add2 = (a, b) => a + b;

console.log(add1(2, 3)); // 5
console.log(add2(2, 3)); // 5
