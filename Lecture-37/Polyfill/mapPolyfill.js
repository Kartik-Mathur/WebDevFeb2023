let arr = [1, 2, 3, 4, 5];

Array.prototype.mymap = function (cb) {
    // console.log(this);
    let arr = this;
    // cb = (element, index, array)=>{return element*5;}
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i],i,arr));
    }

    return newArr;
}

let arr1 = arr.mymap((element, index, array) => {
    console.log(element, index, array)
    return element*5;
});
console.log(arr1);