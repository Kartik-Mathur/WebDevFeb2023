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


let x = updatePersonCountry.bind(person,"India");
x(23);

console.log(person);


x = updatePersonCountry.bind(person2,"Nigeria");
x(22);

console.log(person2)
