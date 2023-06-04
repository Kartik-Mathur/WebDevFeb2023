const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const passport = require('./auth/passport');
const mongoose = require('mongoose');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'asdjbaskdadbaskdv',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname,'')));
app.use('/',require('./routes/login'));

app.use('/signup',require('./routes/signup'))

app.get('/profile',(req,res)=>{
    console.log(req.user);
    res.render('profile',{
        username: req.user.username
    });
})


mongoose.connect('mongodb://127.0.0.1/testdb')
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log("Connection err: ",err);
    })
