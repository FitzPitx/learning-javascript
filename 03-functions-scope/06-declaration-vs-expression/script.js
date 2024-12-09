console.log(addDollarSign(100)); // We can call the function before initialize otherwise with a expression can't

// Function Declaration
function addDollarSign(value){
    return '$'+value;
}

console.log(addDollarSign(100));


// console.log(addPlusSign(250)); this is an error because it's a variable
// Function expression
const addPlusSign = function (value) {
    return '+' + value
}

console.log(addPlusSign(10));