const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const passport = require('passport');

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

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/profile',(req,res)=>{
    console.log(req.user);
    res.render('profile');
})

app.use('/login',require('./routes/login'));

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});