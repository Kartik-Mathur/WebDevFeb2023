Function.prototype.mybind = function (obj, ...args) {
    let car = this;
    // console.log("Car: ",car);
    console.log(args);
    return function (...args1) {
        car.apply(obj, [...args, ...args1]);
    }
}

function car(price, model, tyres, info) {
    console.log(this.name);
    console.log(this.color);
    console.log(this.city);
    console.log(price);
    console.log(model);
    console.log(tyres);
    console.log(info);
}

let c1 = {
    name: 'Maruti 800',
    color: 'White',
    city: 'Delhi'
}

let c2 = {
    name: 'BMW',
    color: 'Blue',
    city: 'Delhi'
}

let x = car.mybind(c1, 100, 2020, 4);
x('Automatic Car');