const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin/script');
// /add-product
router.get('/add-product',adminController.getAddProduct);
router.post('/add-product',adminController.postAddProduct);


module.exports=router;