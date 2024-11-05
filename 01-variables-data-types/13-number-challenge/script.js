let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);


let sum = x + y;
let dif = x - y;
let quotient = x / y;
let reminder = x % y;

let sumOutput = `${x} + ${y} = ${sum}`;

console.log(sumOutput);
console.log(`${x} - ${y} = ${dif}`);
console.log(`${x} / ${y} = ${quotient}`);
console.log(`${x} % ${y} = ${reminder}`);

