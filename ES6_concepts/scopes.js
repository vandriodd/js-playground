// Scope in JavaScript

// 1. Function Scope
// Function scope means that the variable is only accessible within the function in which it is declared.
// var is function scoped
function foo() {
  if (true) {
    var heroOne = "Iron Man";
  }
  console.log(heroOne);
}

foo();

// 2. Block Scope
// Block scope means that the variable is only accessible within the block in which it is declared.
// const is block scoped
function foo2() {
  if (true) {
    const heroTwo = "Superman";
    console.log(heroTwo); // Is accessible here
  }
  // console.log(heroTwo); // But not here
}
foo2();

// Also let is block scoped!
function foo3() {
  if (true) {
    let heroThree = "Batman";
    console.log(heroThree);
  }
  // console.log(heroThree);
}

foo3();

// let and const were introduced in ES6 (2015) to provide block scope, because var function scoping behavior was often confusing and led to bugs in code due to hoisting.
// Also it's important note that let and const have different purposes:

// let is used to declare variables that can be reassigned, while const is used to declare variables that cannot be reassigned.
