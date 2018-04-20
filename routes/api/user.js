var express = require('express');
var router = express.Router();
var user = require("../../controllers/UserController.js");

// restrict index for logged in user only
// router.get('/', user.home);

// route to register page
router.get('/register', user.register);

// route for register action
router.post('/register', user.doRegister);

 // you will get inside only if user is authentificated and has role of admin
  // otherwise he will be redirected to the mainpage '/'
router.get('/admin/dashboard', isAdmin, function(req, res, next) {
  res.send('Hi, admin');
});

function isAdmin(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
       // if user is admin, go next
       if (req.user.role == 1) {
         return next();
       }
    }
    res.redirect('/');
}


// route to login page
router.get('/login', user.login);

// route for login action
router.post('/login', user.doLogin);

// route for logout action
router.get('/logout', user.logout);


module.exports = router;