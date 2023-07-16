let arr = [1, 2, 3, 4, 5];

let arr1 = arr.map((e, indx, arr) => {
    console.log(e, indx, arr);
    return e * 5
});

console.log(arr1);

