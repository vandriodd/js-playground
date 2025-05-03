// Destructuring assignment allows you to unpack values from arrays or properties from objects into several variables.
// It simplifies extracting data :)

// 1. Array Destructuring

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second);

// 2. Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const { name, age } = person;
console.log(name);
console.log(age);

// 3. Nested Destructuring
const user = {
  id: 1,
  profile: {
    username: "johndoe",
    email: "johndoe@gmail.com",
  },
};

const {
  profile: { username, email },
} = user;

// or
// const { username, email } = user.profile;

console.log(username);
console.log(email);
