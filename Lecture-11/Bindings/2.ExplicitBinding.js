function updatePersonCountry(country,age){
    this.country = country;
    this.age = age;
}

let person = {
    name: 'Vaibhav',
    marks: 90,
    isPass: function(){
        if(this.marks>40){
            console.log("Pass Hai");
            this.certificate = true;
        }
        else{
            console.log("Fail Hai");
            this.certificate = false;
        }
    }
}

let person2 = {
    name: 'Nitish',
    marks: 50,
    isPass: function(){
        if(this.marks>40){
            console.log("Pass Hai");
            this.certificate = true;
        }
        else{
            console.log("Fail Hai");
            this.certificate = false;
        }
    }
}

updatePersonCountry.apply(person,["India",28]);
console.log(person);

updatePersonCountry.apply(person2,["Nigeria",200]);
console.log(person2);


// fun.call(obj,firstArgument,secondArgument); // "this" will point to obj inside fun
// updatePersonCountry.call(person,"India",18);
// console.log(person);

// updatePersonCountry.call(person2,"Nigeria",20);
// console.log(person2);

// updatePersonCountry("India");
// console.log(person);

// updatePersonCountry("Nigeria");
// console.log(person2);