function createPerson(name,hobby,age){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

let p = new createPerson("Vaibhav","Tamil Gaane sunna",20);
let p1 = new createPerson("Kartikey","Kuwara Baap dekhna",24);

console.log(p);
console.log(p1);

// createPerson("Vaibhav","Tamil Gaane sunna",20);
// createPerson("Kartikey","Kuwara Baap dekhna",24);

// console.log(global); // Sirf global mei hi update krega
// last wala part hi store hoga baaki sab update ho jaega