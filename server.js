const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//---------------------------- MONGOOSE -----------------------------------
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scheduler");
// Check connection
db.once('open', function() {
	console.log('Connected to MongoDB');
});
// Check for DB errors
db.on('error', function(err) {
	console.log(err);
});

//------------------------------ PASSPORT ----------------------------------
//require passport and passport-local
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

//In 'app.use' section add this lines for initialize passport and express-session.
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport configuration
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//------------------------------------------------------------------------

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
