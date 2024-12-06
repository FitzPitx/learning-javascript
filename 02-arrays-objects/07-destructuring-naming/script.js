const firstName = 'Andrew';
const lastName = 'Nieto';
const age = 21;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.age);

// Destructuring an object
const todo = {
    id: 1,
    title: "Teach JavaScript",
    user: {
        name: 'andrew',
    },
};
const { id: todoId, title, user: {name} } = todo; // Destructuring and making reference to the properties
console.log(todoId, title, name);

// Destructure an array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);