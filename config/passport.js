module.exports = function (passport, user, session) {
    var LocalStrategy = require('passport-local').Strategy;
    var User = user;

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            }
            else {
                done(user.errors, null);
            }
        });

    });

    passport.use('signin', new LocalStrategy(
        { passReqToCallback: true },
        

        function (req, username, password, done) {
        req.session.user = username;
        User.findOne({ where: { username: username } }).then(function (user) {

            if (!user) {
                return done(null, false, { message: 'Username does not exist' });
            }

            if (user.password != password) {

                return done(null, false, { message: 'Incorrect password.' });

            }

            var userinfo = user.get();

            return done(null, userinfo);

        }).catch(function (err) {

            console.log("Error:", err);

            return done(null, false, { message: 'Something went wrong with your Signin' });


        });
    }

    ));

}