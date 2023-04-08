const fs = require('fs');
const path = require('path');
const fileName = 'humanDetails.json';


let filePath = path.join(__dirname,'Data',fileName);

// console.log(filePath)
fs.readFile(
    filePath,
    {
        encoding:'utf-8'
    },
    (err,data)=>{
        if(err) throw new Error("Nahi likh paaye")
        // console.log(data.toString())
        console.log(data);
    }``
);