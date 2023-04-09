const lib2 = require('./lib2');
console.log("Inside Lib1");

let billi = 'Persian Cat';

function add(a, b) {
    return a + b;
}

module.exports.add = add;
module.exports.billi = billi;
module.exports.lib2 = lib2;
// module.exports = {
//     add,
//     billi,
//     lib2
// }



