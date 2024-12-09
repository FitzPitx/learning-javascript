//alert('Hello');

const x = 100; // global scope
console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

run();

if (true){
    console.log(x, 'in block');
}

function add (){
    const y = 200; // function scope
    console.log(y, 'in add function');
    console.log(x, 'in add function');
}

add();