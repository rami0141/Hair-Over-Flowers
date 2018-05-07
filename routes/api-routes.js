// Requiring our model
var db = require("../models");
const nodemailer = require("nodemailer");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the appointments
    app.get("/api/appointments", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Appointment.findAll({}).then(function (dbAppointment) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbAppointment);
        });
    });

    
  // POST route for saving a new appointment
    app.post("/api/appointments", function (req, res) {
        console.log("req.body");

        db.Appointment.create(req.body).then(function(dbAppointment) {
            res.json(dbAppointment);
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
                to: `${req.body.email}`,
                subject: 'Hair Over Flowers Appointment Confirmation',
                text: `Hello ${req.body.name},
                
                       This email is sent to confirm your appointment on ${req.body.appMonth}-${req.body.appDay} at ${req.body.appTime} with ${req.body.stylist} for ${req.body.service}.
                If you have any questions or need to cancel your appointment, please call us at 000-000-0000...
                
                Have a lovely day!`
            }
        // send mail with defined transport object
            smtpTrans.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ', info.messageId);
            });

        });
    });

    app.get("/api/appointments/:stylist", function (req, res) {
        console.log("stylist appt")
         db.Appointment.findAll({ where: { stylist: req.params.stylist } }).then(function (dbAppointment) {
            // We have access to the todos as an argument inside of the callback function
            console.log("Found ")
            res.json(dbAppointment);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/appointments/:id", function (req, res) {
        db.Appointment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbAppointment) {
            res.json(dbAppointment);
        });
    });

};