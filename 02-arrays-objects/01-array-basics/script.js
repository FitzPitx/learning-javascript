let x;

// Array literal
const arr = [1, 2, 3, 4, 5];
const mixed = [1, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

// Array constructor
const fruits = new Array('apple', 'banana', 'cherry');

x = arr[0];

x = arr[0] + arr[1];

x = `My favorite fruit is ${fruits[1]}`;

x = arr.length;

fruits[0] = 'pear';

fruits[3] = 'orange';

fruits[fruits.length] = 'grape';

x = fruits;
console.log(x);