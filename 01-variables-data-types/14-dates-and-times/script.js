let d;

d = new Date();

d = d.toString();

d = new Date(2020, 0 , 1);
d = new Date('2020-01-01');
d = new Date('2021-07-10T12:30:00');
d = new Date('07-10-2022');

d = Date.now();

d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1657474200000);

d = Math.floor(Date.now() / 3600);

console.log(d);