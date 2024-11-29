const person = {
    name: 'Andres',
    age: 21,
    isAdmin: true,
    address: {
        city: 'Bogota',
        street: 'Calle 13',
        state: 'Bogota DC'
    },
    hobbies: ['programming', 'reading', 'music']
};

x = person['name'];
x = person.address.city;
x = person.hobbies[1];

person.name = 'Andres Felipe';
person['isAdmin'] = false;

delete person.age;
person.hasChildren = true;
person.greet = function () {
    console.log(`${this.name} says hello`);
}

person.greet();