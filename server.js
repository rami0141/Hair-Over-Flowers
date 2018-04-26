// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
require("dotenv").config();


// Sets up the Express Server
var app = express();
const PORT = process.env.PORT || 8080;
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Requiring our models for syncing
 var db = require("./models");

// Sets up the Express Server to serve static files
app.use(express.static('./public'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BODY-PARSER MIDDLEWARE
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public folder
app.use(express.static('./public'));

// Setting up Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/auth.js")(app, passport);
require("./config/passport.js")(passport, db.user, session);

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

