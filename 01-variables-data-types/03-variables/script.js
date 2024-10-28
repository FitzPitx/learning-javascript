// Ways to declare a variable
// var, let, const

let firstName = 'Andrew';
let lastName = 'Smith';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming conventions
// - Only letters, numbers, underscores, and dollar signs
// - Cannot start with a number
// - camelCase

// Multiword Formatting
// - camelCase
// - snake_case
// - PascalCase
// - kebab-case
// - lowercase

//Re-assigning variables
age = 21;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score += 1;
}

console.log(score);

const PI = 3.14;

const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
console.log(arr);

const person = {
    name: 'John',
    age: 30
}

console.log(person);

person.name = 'Andrew';
person.age = 21;

console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 1, e = 2, f = 3;