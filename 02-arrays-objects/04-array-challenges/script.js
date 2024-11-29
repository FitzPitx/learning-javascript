

//First challenge
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
arr.reverse();
//console.log(arr);

//Second challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];


//Solution 1
// const arr3 = arr1.splice(0, 4).concat(arr2);
// console.log(arr3);

//Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4,1);
console.log(arr4);



