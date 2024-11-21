

//First challenge
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
arr.reverse();
//console.log(arr);

//Second challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

x = arr1.splice(4);
x = arr1.concat(arr2);
console.log(x);