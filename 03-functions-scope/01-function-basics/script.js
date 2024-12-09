function sayHello () {
    console.log('Hello!');
}

sayHello(); // Hello!

function add(num1, num2){ // num1 and num2 are parameters
    console.log(num1 + num2);
}
add(1,2); // those are arguments

function subtract(num1, num2){
    return num1 - num2;
    console.log('This will not be printed');
}

let result = subtract(10, 2); // nothing will be printed
console.log(result); // 8