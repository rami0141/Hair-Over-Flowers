var path = require("path");

module.exports = function (app) {
	
	app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/adminOnly", isLoggedin, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });

    function isLoggedin(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect("/signin")
        }
    }
};