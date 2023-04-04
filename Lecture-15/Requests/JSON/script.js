let obj = {
    a: "Hello",
    b: true,
    c: 1021121,
    e: [1,2,3,4],
    f: {
        "picnic": true
    }
}

// JSON: JavaScript Object Notation
console.log(JSON.stringify(obj));

let obj_json = JSON.stringify(obj)
console.log(JSON.parse(obj_json));