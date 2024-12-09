// ES6 UPDATE

// This is a regular function
// function add(a, b){
//     return a + b;
// }

const add = (a,b) =>{
    return a + b;
}

// Or we can resume this function like this
const subract = (a,b) => a - b; // so it has an implicit return 

const double = (a) => a * 2; // with one parameter

// Can leave off () with a single param
const doubleWithout = a => a * 2;

// Returning an object
const createObject =() => ({
    name: 'brad' // We just surround the curly braces with parentheses
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

// Arrow function in a Callback
numbers.forEach(n => console.log(n)); //Shorter and concise

console.log(add(2,5));
console.log(subract(5,2));
console.log(double(2));
console.log(doubleWithout(5));
console.log(createObject());