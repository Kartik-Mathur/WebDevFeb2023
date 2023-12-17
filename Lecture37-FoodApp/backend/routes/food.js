const path = require('path');
const express = require('express');
const router = express.Router();


const foodController = require('../controllers/food');

router.get('/getfoods',foodController.getFoods);

module.exports=router;