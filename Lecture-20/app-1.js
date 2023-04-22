const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const TodosDB = require('./database/scripts/todos');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// To send the entire files on the frontend at one go
app.use(express.static(path.join(__dirname,'public')));

// let todos=[];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/gettodo',(req,res)=>{
    // res.send(todos);
    TodosDB.getTask()
        .then((data)=>{
        
            res.send(data);
        })
        .catch(err=>{
            res.status(404).send("Error Fetching data");
        })
})

app.post('/addtodo',(req,res)=>{
    const {newtask} = req.body;
    // todos.push(newtask);
    TodosDB.addTask({
        name: newtask,
        id: uuidv4()
    }).then((msg)=>{
        res.redirect('/gettodo');
    })
    .catch(err=>{
        res.send("Could not add the task");
    })
    
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});