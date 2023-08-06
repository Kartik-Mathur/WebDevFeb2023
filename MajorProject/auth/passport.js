const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/Users');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            let user = await Users.findOne({ username });
            if (!user) return done(null, false);

            bcrypt.compare(password, user.password).then(function (result) {
                if (!result) return done(null, false);
            });
            return done(null, user);

        } catch (err) {
            if (err) return done(err);
        }
    }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({ _id: id });
        done(null, user);
    }
    catch (err) {
        done(err);
    }
});

module.exports = passport;