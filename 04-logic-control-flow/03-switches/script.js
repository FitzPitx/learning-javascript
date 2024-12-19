const d = new Date();
const hour = d.getHours();
const month = d.getMonth();
console.log(hour, month);

switch (month) {
    case 11:
        console.log('it is November!');
        break;
    default:
        console.log('it is not the hour');
        break;
}