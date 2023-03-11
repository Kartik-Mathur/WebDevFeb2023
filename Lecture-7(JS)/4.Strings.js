let str = "Learning Coding";

console.log(str);
let newStr = ''
for(let i = 0; i < str.length ; i++){
    newStr += str[i] + '-';
}

console.log(newStr);

let indx = str.indexOf("Cloding");
console.log(indx);

for(let i of str){
    console.log(i);
}

let file = 'myfile.jpg'
console.log(file.split('.')); //[ 'myfile', 'mp4' ]
console.log(file.split('.').pop()); //'mp4'
let format = file.split('.').pop();
if(['jpg','png','webp'].indexOf(format) != -1){
    console.log("Sahi hai kr denge kaam");
}
else{
    console.log("Nahi ho paega kaam");
}