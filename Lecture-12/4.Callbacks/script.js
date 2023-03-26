function MainCourse(cb){
    console.log("Khaana Shuru");
    setTimeout(()=>{
        console.log("Khaana Khatam");
        cb(sweets);
    },3000);
}


function drinks(cb){
    console.log("Drink peena shuru");
    setTimeout(()=>{
        console.log("Drinks bhi khatam")
        cb(billBharo);
    },3000);
}

function sweets(cb){
    console.log("Sweets shuru");
    setTimeout(()=>{
        console.log("Sweets bhi khatam")
        cb();
    },3000);
}


function billBharo(){
    console.log("Bill kaun bharega discussion shuru");
    setTimeout(()=>{
        console.log("Kuwara Baap Movie wala bharega");
    },3000);
}

MainCourse(drinks);