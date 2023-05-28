const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({ extended: true }));
const Users = require('./models/users');


app.use((req,res,next)=>{
    Users.find({_id: "6473103f2e1796f4867da813"})
        .then(user=>{
            console.log(user[0]);
            req.user = user[0];
            next();
        })
})

app.get('/myblogs',(req,res)=>{
    console.log("Current Logged In User: ",req.user);
    res.render('myblogs');
})

app.get('/',(req,res)=>{
    console.log("Current Logged In User: ",req.user);
    Users.find({})
        .then((users)=>{
            console.log(users);
            res.render('users',{
                users
            });
        })
        .catch(err=>{
            res.send("USers nahi mille");
        })
    
})

app.post('/adduser',(req,res)=>{
    const {name, age} = req.body;

    let newUser = new Users({name,age});
    newUser.save()
        .then(()=>{
            // res.send("User added Success");
            res.redirect('/');
        })
        .catch(err=>{
            res.send(err);
        })

})

app.get('/deleteuser', (req,res,next)=>{
    const {id} = req.query;

    Users.deleteOne({_id: id}).then(()=>{
        res.redirect('/');
    }).catch(err=>{
        res.send(err);
    })
    
})

mongoose.connect('mongodb://127.0.0.1:27017/blogs')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })



