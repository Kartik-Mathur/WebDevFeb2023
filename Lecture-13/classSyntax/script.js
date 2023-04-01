class Person{
    constructor(name,age,hobby,income){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.taxLagega = function(){
            return income>=7;
        }
    }

    printName(){
        console.log("Name: ",this.name);
    }
    
    static country(){
        console.log("Country: India");
    }

    get getAge(){
        return this.age;
    }

    set setAge(v){
        this.age = v;
    }
}

const p1 = new Person("Kartikey",40,"Kuwara Baap Returns",4);
console.log(p1);
p1.printName();

Person.country();
// p1.country(); //Error aaega

console.log(p1.getAge);
p1.setAge = 30;
console.log(p1);

console.log(p1.taxLagega());
console.log(p1.income);