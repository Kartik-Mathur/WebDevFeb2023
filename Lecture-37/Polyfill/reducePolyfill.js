let arr = [1, 2, 3, 4, 5];

Array.prototype.myreduce = function (cb, inital) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        inital = inital === undefined ?
            arr[i] : cb(inital, arr[i], i, arr);
    }

    return inital;
}


let arr1 = arr.myreduce((accum, element, index, array) => {
    console.log("Acc: ",accum," Element: ",element, " I:", index, array);
    return accum + element;
}, 10);
console.log(arr1);