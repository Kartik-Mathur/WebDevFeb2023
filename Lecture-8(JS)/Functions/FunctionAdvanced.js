// Functions are also the data types in JS
// similar to Number, String, Boolean
let a = 10; // I can store Number inside a
let str = "Hello World"; // I can store String inside a
// variable

let x = function add(a,b){
    return a + b;
}

console.log(x(10,120));
console.log(x);
// add(10,200); will not work

let cat = function(){
    console.log("Cat says Meoowwww");
}

cat();
console.log(cat);
console.log(cat.toString());