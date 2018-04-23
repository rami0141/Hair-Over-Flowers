// Requiring our model
var db = require("../models");

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
        db.Appointment.create(req.body).then(function(dbAppointment) {
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
