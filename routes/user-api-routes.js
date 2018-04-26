 // Requiring our model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {   
    // Find name by username route for the user table
    app.get("/api/users", function (req, res) {
    	console.log("dsfsdafsdfasfaf")
         db.user.findOne({ where: { username: req.session.user } }).then(function (dbUser) {
            // We have access to the todos as an argument inside of the callback function
            console.log("Found " + req.session.user)
            res.json(dbUser);
        });
    });
}