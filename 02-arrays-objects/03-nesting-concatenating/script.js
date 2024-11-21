let x; //output variable
const fruits = ['apple', 'pear', 'strawberry'];
const berries = ['blueberry', 'blackberry', 'raspberry'];

//fruits.push(berries);

//x = fruits[3][0];

const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries);

// spread operator
x = [...fruits, ...berries]

// Flatten an array
x = [1, 2,[3,4], [5,6]];
x = x.flat();

// Static method
x = Array.isArray(fruits);
x = Array.from('hello'); // Create an array from a string

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // Create an array from a list of arguments

console.log(x);