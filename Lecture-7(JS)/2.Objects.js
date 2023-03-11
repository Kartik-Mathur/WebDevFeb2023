let obj = {
    a: true,
    b: "Hello",
    c: 110.11,
    'movie name': 'Bahubali',
    '': 'Empty String',
    ' ': "Space hai",
    "arr": [1,2,3,4]
};

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

for(let i in obj){
    console.log(i," : ",obj[i]);
}

// console.log(obj.movie name);
// console.log(obj['movie name']);
// console.log(obj[' ']);
// console.log(obj['']);


// console.log(obj['a']);
// console.log(obj['b']);
// console.log(obj['c']);


let arr = ["Jello", 1, 2, true, "abc"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for(let i = 0 ; i < arr.length ; i++){
//     console.log("value at index: ", i, ": ", arr[i])
// }

// arr[10] = "Meri Marzi";
// console.log(arr);


// for(let i = 0 ; i < arr.length ; i++){
//     console.log("value at index: ", i, ": ", arr[i])
// }

// arr.push("Mei kuch bhi karu");
// arr.pop();
// console.log(arr);
