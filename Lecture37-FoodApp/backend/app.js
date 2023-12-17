const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(express.urlencoded({extended:true}));

const foodRouter = require('./routes/food');

app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use('/',foodRouter);

mongoose.connect(
    process.env.MONGOKEY
).then(()=>{
    // require('./models/seed'); // To initialise the database
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });  
})
