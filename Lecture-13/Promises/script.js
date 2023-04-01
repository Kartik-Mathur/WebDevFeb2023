let freeHai = true;

let kalMilneAaungi = new Promise((resolve, reject) => {
    console.log("Starting to wait");
    setTimeout(() => {
        if (freeHai) resolve("Milne aa gaye");
        else reject("Katt gaya");

        console.log("hello we are still working");
    }, 3000);
})


kalMilneAaungi
    .then((msg) => {
        console.log(msg);
        return "Everything is done";
    })
    .then((newMessage)=>{
        console.log(newMessage);  
    })
    .catch((err) => {
        console.log(err);
    })

