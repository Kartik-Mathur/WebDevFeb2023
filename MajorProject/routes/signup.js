const path = require('path');
const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signup/script.js');

router.get('/',signupController.getSignup);

module.exports=router;