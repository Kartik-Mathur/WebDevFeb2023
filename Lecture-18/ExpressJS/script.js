const express = require('express');
const app = express();
const PORT = 4444;

app.get('/',(req,res)=>{
    // console.log(req);
    res.send("Hello Welcome to my APP");
})

app.get('/hello',(req,res)=>{
    res.send("Hi! There we are using my app");
})

app.get('/hello/1',(req,res)=>{
    res.send("Hi! There we are using my app-1");
})


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});