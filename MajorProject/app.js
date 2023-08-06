const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./auth/passport');

app.use(flash());
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
require('dotenv').config()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
}))

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res,next)=>{
    res.redirect('/login')
})

app.use('/signup', require('./routes/signup'));
app.use('/login',require('./routes/login'));
// app.use('/admin',require('./routes/login'));
// app.use('/shop',require('./routes/login'));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })
