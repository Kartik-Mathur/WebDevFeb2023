class Vehicle{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    set updateName(name){
        this.name = name;
    }
}


class Car extends Vehicle{
    constructor(name,year,seater){
        super(name,year);
        this.seater = seater;
    }

    printCar(){
        console.log("Name: ",this.name);
        console.log("Year: ",this.year);
        console.log("Seater: ",this.seater);
    }
}

class ElectricCar extends Car{
    constructor(name,year,seater,battery){
        super(name,year,seater);
        this.battery = battery;
    }

    showDetails(){
        console.log("Name: ",this.name);
        console.log("Year: ",this.year);
        console.log("Seater: ",this.seater);
        console.log("Battery: ",this.battery);
    }
}


let maruti = new Car("Swift",2020,4);
console.log(maruti);
maruti.printCar();
maruti.updateName = "SwiftDzire";
console.log(maruti);

let nexon = new ElectricCar("Tata Nexon",2021,5,25000);
nexon.showDetails();
nexon.updateName = "Tata-Nexon";
nexon.showDetails();