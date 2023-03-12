add(10,20);
subtract(100,20);
console.log(x());

function subtract(a,b){
    console.log(a-b);
}

function add(a,b){
    console.log(a+b);
}

// var x=100;
var x = function(a,b){
    console.log(a+b);
}

// var y = function(a,b){
//     console.log(a-b);
// }