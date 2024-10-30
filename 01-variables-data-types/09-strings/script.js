let x;

const name = 'andres';
const age = 21;

x = "Hello my name is " +name+ "and I am "+ age+ " years old.";

// Template literals
x = `Hello my name is ${name} and I am ${age} years old.`;

// Properties and methods
const s = new String('Hello World');
x = s.length;
x = typeof s;

// Access individual characters by key
x = s[0];

x = s.__proto__; // Object prototype of the string to access its methods

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('W');
x = s.substring(0, 5);
x = s.slice(0, 5); // Similar to substring but it allows negative numbers
x = s.trim(); // Removes white spaces
x = s.replace('World', 'There');
x = s.includes('World');
x = s.valueOf(); // Returns the primitive value of the string
x = s.split(' '); // Splits the string into an array

console.log(x);