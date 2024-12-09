const x = 100;

if (true){
    const y = 200;
    console.log(x + y);
}

// this is not going to work
// console.log(x + y);
for (let i = 0; i <= 10; i++){
    console.log(i);
}


if (true){
    const a = 500;
    let b = 1000;
    var c = 1500;
}

console.log(c); // 1500
// console.log(b); ReferenceError: b is not defined