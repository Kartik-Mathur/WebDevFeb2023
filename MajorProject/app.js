const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const MongoStore = require('connect-mongo');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
require('dotenv').config()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test-app' })
  }))

app.use('/signup',require('./routes/signup'));
// app.use('/login',require('./routes/login'));
// app.use('/admin',require('./routes/login'));
// app.use('/shop',require('./routes/login'));


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});