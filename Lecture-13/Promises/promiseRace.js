function nibbaBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibba Breakup done");
        }, 7000);
    })
}

function nibbiBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibbi Breakup done");
        }, 8000);
    })
}

function nipateGaye() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bacha hi nhi toh ab kya breakup");
        }, 3000);
    })
}

Promise.race(
    [nibbaBreakUp(), nibbiBreakUp(), nipateGaye()]
).then((msg) => {
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})