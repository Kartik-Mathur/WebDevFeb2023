const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
const controller = require('./controller/controller');

app.get('/items',controller.getItems);
app.post('/item',controller.postItem);

mongoose.connect('mongodb://127.0.0.1:27017/food')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    });
