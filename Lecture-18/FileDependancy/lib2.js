const lib1 = require('./lib1');
console.log("Inside lib2");

let dog = 'Galli Ka Kutta';

function subtract(a, b) {
    return a - b;
}

module.exports.subtract = subtract;
module.exports.dog = dog;
module.exports.lib1 = lib1;

// module.exports = {
//     subtract,
//     dog,
//     lib1
// }