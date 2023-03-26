let a = 10;

let person = {
    name: 'Kartikey',
    hobby: "Kuwara Baap Movie"
}

function hello() {
    console.log("Hello");
}


console.log("a.__proto__ == Number.prototype:", a.__proto__ == Number.prototype);
console.log("a.__proto__.__proto__ == Object.prototype:",
    a.__proto__.__proto__ == Object.prototype);
console.log("person.__proto__ == Object.prototype:", person.__proto__ == Object.prototype);
console.log("hello.__proto__ == Function.prototype:", hello.__proto__ == Function.prototype);

Object.prototype.sayHello = function(){
    console.log("Hello!!");
}

hello.sayHello();
person.sayHello();
a.sayHello();