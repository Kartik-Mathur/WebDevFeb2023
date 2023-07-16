let id =  setTimeout(()=>{
    console.log("Chal Gaya");
},5000);

console.log(id);

setTimeout(()=>{
    clearTimeout(id);
},2000);