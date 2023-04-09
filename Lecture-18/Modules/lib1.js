console.log("Inside Lib1");
function add(a, b) {
    return a + b;
}

function multiply(a,b){
    return a*b;
}

module.exports = {
    add,
    multiply
}