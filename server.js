// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const nodemailer = require("nodemailer");
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
app.use(bodyParser.urlencoded({ extended: false }));
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


app.post("/send", (req, res) => {
    console.log(req.body);

// sending emails with SMTP, configuration using SMTP settings
	var smtpTrans = nodemailer.createTransport({
		host: 'smtp.gmail.com', //hostname
		secureConnection: true,
		port: 465, // port for secure SMTP
			auth: {
	 			user: process.env.email,
				pass: process.env.password
			},

	});

    // setup email data with unicode symbols
    let mailOptions = {
    	from: "Appointment Scheduler",
     	to: process.env.email,
    	subject: 'Hair Over Flowers Appointment Confirmation',
    	text: `'This email is sent to confirm your appointment on '${req.body.month} ${req.body.day} ${req.body.time}`
    }
// send mail with defined transport object
    smtpTrans.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ', info.messageId);
    });
 })
	

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

