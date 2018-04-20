const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/scheduler",
  {
    useMongoClient: true
  }
);

const appointmentSeed = [
  { 
    name: "Jessica Simpson", 
    phone: "612-842-9988", 
    email: "jessica.simpson@gmail.com", 
    appDate: "5/1/2018", 
    time: "2:30pm", 
    comments: "I want my hair to look good!"  
  },

  { 
    name: "Anna Johnson", 
    phone: "763-555-4444", 
    email: "anna.johnson@umn.edu", 
    appDate: "5/3/2018",
    time: "12:30pm", 
    comments: "I am considering a bob haircut." 
  },

  {
    name: "Kim Nam Joon ", 
    phone: "912-841-7862", 
    email: "namjoon@hanmail.net", 
    appDate: "5/5/2018",
    time: "3:00pm",   
    comments: "I am here from Korea and need a good haircut." 
  }, 

  { 
    name: "Cristina Zhang", 
    phone: "512-335-4598", 
    email: "cristina.zhang@gmail.com", 
    appDate: "5/5/2018",
    time: "1:00pm", 
    comments: "I need my split ends to be cut." } 
];

db.Appointment
  .remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
