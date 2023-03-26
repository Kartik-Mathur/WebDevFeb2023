let arr = [1,2,3,4,5];

let newarr = arr.map((val,indx,ar)=>{
    return val*10;
})

let newarr1 = arr.map((val,indx,ar)=>val*val);

console.log(newarr1);
console.log(newarr);
console.log(arr);


let newarr2 = arr.filter((val,indx,ar)=>{
    if(val%2 == 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(newarr2);

let sum = arr.reduce((accum,val,indx,ar)=>{
    return accum + val;
})

let product = arr.reduce((accum,val,indx,ar)=>{
    return accum * val;
}, 0)


console.log(sum);
console.log(product);