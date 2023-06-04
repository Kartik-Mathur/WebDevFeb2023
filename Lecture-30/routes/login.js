const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('login');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });


module.exports = router;