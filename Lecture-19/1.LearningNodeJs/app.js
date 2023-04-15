const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// To see the body data of a POST request
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/hello', (req, res) => {
    res.send("Hello Welcome Again");
})

// Params ke through data dena server ko
app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})


// Query Parameters
app.get('/bye', (req, res) => {
    let str =
        req.query.age ?
            `Bye, ${req.query.name}, age: ${req.query.age}` :
            `Bye, ${req.query.name}`;
    res.send(str);
})

// POST REQUEST
app.post('/',(req,res)=>{
    // console.log(req.body)
    const {contact,email} = req.body;
    res.send(`Post Success ${contact} ${email}`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});