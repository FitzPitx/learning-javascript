// If Statements

if (true) {
    console.log("This is true");
}

if (!true) {
    console.log("This is false");
}

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x >= y) {
    console.log(`${x} is greater or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
    const z = 20;
    console.log(`${z}`);
}

// Shorthand If
if (x >= y ) console.log(`${x} is greater or equal to ${y}`)
    else console.log('This is false');