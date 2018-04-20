// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
// var session = require('express-session');
// const passport = require('passport')
require("dotenv").config();


// Sets up the Express Server
var app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
 // var db = require("./models");

// Sets up the Express Server to serve static files
app.use(express.static('./public'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BODY-PARSER MIDDLEWARE
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// public folder
app.use(express.static('./public'))

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
