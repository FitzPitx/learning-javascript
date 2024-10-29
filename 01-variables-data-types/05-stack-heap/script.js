// Values are stored on the stack 
const name = 'John';
const age = 30;

// Reference types are stored on the heap
const person = {
    name: 'John',
    age: 30,
}

let newName = name;
newName = 'Andrew';

let newPerson = person;
newPerson.name = 'Andrew';

console.log(name, newName);

console.log(person, newPerson);