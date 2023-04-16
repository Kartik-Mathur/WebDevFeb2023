const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// To send the entire files on the frontend at one go
app.use(express.static(path.join(__dirname,'public')));

let todos=[];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

/*
app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
})

app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'script.js')); 
})
*/

app.get('/gettodo',(req,res)=>{
    res.send(todos);
})

app.post('/addtodo',(req,res)=>{
    const {newtask} = req.body;
    todos.push(newtask);
    res.redirect('/gettodo');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});