const numbers = [1, 3, 5, 7, 9];

// Add an element to the end
//numbers.push(9);

// Remove an element from the end
//numbers.pop();

// Add an element to the beginning
//numbers.unshift(-1);

//numbers.reverse();

// know if an element is included
//console.log(numbers.includes(5));

x =  numbers.indexOf(5);

x = numbers.slice(1, 3);

//x = numbers.splice(1, 5);

//x = numbers.splice(3,1);

x = numbers.splice(1, 4).reverse().toString().charAt(0);
console.log(x);