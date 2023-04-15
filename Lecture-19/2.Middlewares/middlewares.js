const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// To see the body data of a POST request
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("Inside middleware - 1");
    req.cnt = 1;
    next();
})

app.use((req,res,next)=>{
    console.log("Inside middleware - 2");
    req.cnt++;
    next();
})

// Path: ['/listen','/listen/a','/listen/a/b/c/d'] works on these
// Path: ['/listena','/listena/a','/listen1/a/b/c/d'] Doesn't work on these
app.use('/listen',(req,res,next)=>{
    console.log("Alexa is converting the audio to text");
    // res.send("Sunn Lia meine jo tune kaha");
    next();
})

app.get('/listen',(req,res)=>{
    res.send("Sunn lia meine jo tune bola");
})

app.get('/',(req,res)=>{
    res.send(`Hello World ${req.cnt}`);
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});