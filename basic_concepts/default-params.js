// Default parameters allows us to set default values for functions parameters, which is helpful when cretain arguments are not provided

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!
