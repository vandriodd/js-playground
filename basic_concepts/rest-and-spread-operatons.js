// Rest (...) and spread (...) operators provide more flexibility when working with arrays, objects, and function arguments.

// 1. Rest Operator -> used to collect all remaining arguments into an array

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// 2. Spread Operator -> used to spread elements of an array or object into another array or object

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Spread operator is also useful for merging arrays or objects
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 1, 2, 3, 4, 5]
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 2, c: 3 }

// Or for copying arrays or objects (shallow copies)
const copiedArray = [...arr1];
console.log(copiedArray); // [1, 2, 3]
const copiedObject = { ...obj1 };
console.log(copiedObject); // { a: 1, b: 2 }
