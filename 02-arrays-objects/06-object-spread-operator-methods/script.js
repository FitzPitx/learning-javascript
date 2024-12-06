let x;
const todo = {}; // or new Object();


todo.id =1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

// Nesting objects
const person = {
    address: {
        coord: {
            lat: 0,
            lng: 15
        }
    }
}
console.log(person.address.coord.lat);

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);
x = obj3;
console.log(x);  
console.log(obj4);

const todos = [
    { id: 1 , name: 'Buy milk', completed: false},
    { id: 2 , name: 'Buy bread', completed: true},
    { id: 3 , name: 'Buy butter', completed: false}
]

x = todos[0].name;

// Method to retrieve all the keys of an object
x = Object.keys(todo);

// Method to retrieve the data length of an object
x = Object.keys(todo).length;

// Method to retrieve all the values of an object
x = Object.values(todo);

// Method to retrieve all the key-value pairs of an object
x = Object.entries(todo);

x = todo.hasOwnProperty('id');
console.log(x);


