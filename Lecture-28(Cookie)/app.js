const path = require('path');
const express = require('express');
const app = express();
const PORT = 4445;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res,next)=>{
    // res.cookie('name','Vaibhav');
    console.log(res.getHeader('Set-Cookie'));
    res.setHeader('Set-Cookie',"name=shresth");
    res.send("Ghoomne jaenge hum");
})

app.get('/anotherpath',(req,res)=>{
    
    res.send("Jaenge Ghoomne Hum");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});