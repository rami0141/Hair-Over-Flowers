var path = require("path");


module.exports = function (app, passport) {

    app.get("/signin", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.post('/signin', passport.authenticate('signin', {
        successRedirect: '/adminOnly',
        failureRedirect: '/signin'
    }
    ));

    app.get('/signout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/signin');
        });
    });


};