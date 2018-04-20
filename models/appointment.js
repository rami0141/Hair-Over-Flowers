const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // Defining the layout
// //appointment schema
let appointmentSchema = new Schema({
  	name: { type: String, required: true },
  	phone: { type: String, required: true },
	  // `email` must be of type String and must be unique
  	// `email` must match the regex pattern below and throws a custom error message if it does not
  	email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  	appDate: { type: String },
  	time: { type: String },
  	Comments: { type: String } 	
});

// creating the model of the layout
let Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
