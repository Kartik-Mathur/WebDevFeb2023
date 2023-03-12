let x = 1000;

function Fun(v) {
    console.log(x); // 1000
    let x = 10;
    if(v>10){
        x = 100;
        console.log(x); // 100
    }
    console.log(x); // 100
}
Fun(199);




// function Fun(v) {
//     let x = 10;
//     if(v>10){
//         // console.log(x); This cannot be used
//         let x = 1000;
//         console.log(x);
//     }
//     console.log(x);
// }
// Fun(199);


// let x = -100;

// function Fun() {
//     let x = 10;
//     let y = 100;
//     console.log(y);
// }

// Fun(-10);

// function Fun(v){
//     console.log(x);
//     if(v>5){
//         let x = 10;
//     }
//     else{
//         let y = 100;
//     }
//     console.log(y);
// }

// Fun(-10);

// function Fun(v){
//     console.log(x);
//     if(v>5){
//         var x = 10;
//     }
//     else{
//         var y = 100;
//     }
//     console.log(y);
// }

// Fun(-10);

// console.log(x);