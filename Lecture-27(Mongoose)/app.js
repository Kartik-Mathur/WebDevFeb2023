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
const Blogs = require('./models/blogs');

app.use((req, res, next) => {
    Users.find({ _id: "6471e0aab934b6c84bc580a1" })
        .then(user => {
            console.log(user[0]);
            req.user = user[0];
            next();
        })
})

app.get('/blogs',(req,res)=>{

    Blogs.find({ })
        .populate('author_id')
        .then((blogs) => {
            console.log(blogs);
            res.render('blogs',{blogs});
        })
})

app.get('/myblogs', (req, res) => {
    console.log("Current Logged In User: ", req.user);
    Blogs.find({ author_id: req.user._id })
        .populate('author_id')
        .then((blogs) => {
            console.log(blogs);
            res.render('myblogs',{blogs});
        })

})

app.get('/', (req, res) => {
    console.log("Current Logged In User: ", req.user);
    Users.find({})
        .then((users) => {
            console.log(users);
            res.render('users', {
                users
            });
        })
        .catch(err => {
            res.send("USers nahi mille");
        })

})

app.get('/deleteblog',(req,res)=>{
    const {id} = req.query;
    Blogs.deleteOne({_id: id})
        .then(()=>{
            res.redirect('/myblogs');
        })
        .catch(err=>{
            res.send(err);
        })
})

app.post('/adduser', (req, res) => {
    const { name, age } = req.body;

    let newUser = new Users({ name, age });
    newUser.save()
        .then(() => {
            // res.send("User added Success");
            res.redirect('/');
        })
        .catch(err => {
            res.send(err);
        })

})

app.get('/deleteuser', (req, res, next) => {
    const { id } = req.query;

    Users.deleteOne({ _id: id }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send(err);
    })

})


app.post('/addblog', (req, res) => {
    const { title, description } = req.body;
    const newBlog = new Blogs({
        title,
        description,
        author_id: req.user._id
    });
    Users.findOne({ _id: req.user._id })
        .then((user) => {
            user.blogId.push(newBlog._id)
            user.save();
        })
    newBlog.save()
        .then(() => {
            res.redirect('/myblogs')
        })
        .catch(err => {
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



