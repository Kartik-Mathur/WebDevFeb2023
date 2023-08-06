const path = require('path');
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login/script');
const passport = require('../auth/passport');

router.get('/', loginController.getLogin);
router.post('/',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/shop/profile');
    });

module.exports = router;