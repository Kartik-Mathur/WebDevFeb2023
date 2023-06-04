const passport = require('passport');
const User = require('../models/users');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const FacebookStrategy = require('passport-facebook');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function (email, password, done) {
        console.log("Here", email, password);
        try {
            let user = await User.findOne({ username: email });
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password).then(function (result) {
                if (result == false) return done(null, false);
                return done(null, user);
            });

        }
        catch (err) {
            if (err) { return done(err); }
        }
    }
));


passport.use(new FacebookStrategy({
    clientID: "263623882890413",
    clientSecret: "5f9e0fc18ebc39f71b1a15186930bb31",
    callbackURL: "http://localhost:4444/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log("Token: ", accessToken);
        console.log("Refresh Token: ", refreshToken);
        console.log("Profile: ", profile);
        User.create({ 
            username: profile.displayName,
            token:accessToken,
            facebookId: profile.id 
        }).then((user) => {
            cb(null, user);
        }).catch(err => {
            cb(err, false);
        })
    }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch(err => {
            done(err, false);
        })

});

module.exports = passport;