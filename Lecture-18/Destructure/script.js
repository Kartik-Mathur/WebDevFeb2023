let obj = {
    a: 1,
    b: true,
    c: function(){
        console.log("Inside OBJ");
    }
}

// Destructure
let {c,b,a} = obj;

console.log(a);
console.log(b);
c()
obj.c()
