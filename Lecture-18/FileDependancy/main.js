const MyCar = require('./myCar');

const {add} = require('./lib1');

const lib1 = require('./lib2');
const lib2 = require('./lib2');

console.log(add(10,20));
console.log(lib2);
MyCar.print();