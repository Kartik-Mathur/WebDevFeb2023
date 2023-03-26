let arr = [1,2,3,4];
let arr1 = [1,2,3,4];

arr.forEach((val,i,ar)=>{
    console.log("Index : ",i,"Value:",val,ar);
})

console.log(arr);
arr.meraLoop = function(){
    for(let i = 0; i < this.length ; i++){
        console.log(this[i]);
    }
}

arr.meraLoop();
// arr1.meraLoop();
console.log(arr);
console.log(arr1);
