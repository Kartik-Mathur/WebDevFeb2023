let arr = [1, 2, 3, 4, 5];

Array.prototype.myfilter = function (cb) {
    let arr = this;
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr))
            newArr.push(arr[i]);
    }
    return newArr;
}

let arr1 = arr.myfilter((element, index, array) => {
    if (element % 2 != 0) return true;
    else return false;
});

console.log(arr1);