const fs = require('fs');
const path = require('path');
const fileName = 'humanDetails.json';

let humans = [
    {name:'Vaibhav',age:23,hobby:'Singing'},
    {name:'Kartikey',age:27,hobby:'Dancing'},
    {name:'Nitish',age:25,hobby:'Smuggling'},
    {name:'Farhan Akhtar',age:33,hobby:'Acting'}
]


let filePath = path.join(__dirname,'Data',fileName);

// console.log(filePath)
fs.writeFile(
    filePath,
    JSON.stringify(humans),
    {
        encoding:'utf-8',
        flag: 'w'
    },
    (err)=>{
        if(err) throw new Error("Nahi likh paaye")
        console.log('Sahi hai! Ho gaya sab')
    }
);