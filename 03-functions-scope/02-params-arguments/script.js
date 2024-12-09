// Default Parameters
function registerUser(user = 'Bot'){
    // if (!user){
    //     user = 'Bot';
    // }
    return user + ' registered!';
}

console.log(registerUser('Andrew')); // Bot registered!

// Rest Parameters
function sum(...numbers){ // with spread operator we can pass multiple arguments
    let total = 0;

    for (let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(1,2,3,4,5)); // 15

// Arguments Object
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} logged in!`;
}

const user = {
    name: 'Andrew',
    id: 1
}

console.log(loginUser(user)); // The user Andrew with the id of 1 logged in!

// Arrays as params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
getRandom(fruits); // Cherry