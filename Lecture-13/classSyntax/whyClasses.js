let obj = {
    a:1,
    b:true
}

let newObj = Object.create(obj);
console.log(newObj);

console.log(newObj.a);
console.log(newObj.b);
console.log(newObj.__proto__ == obj);
