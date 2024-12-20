let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);
x = d.toLocaleString('defaul', {month: 'short'});
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Bogota',

});
console.log(x);
