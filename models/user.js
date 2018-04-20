const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let  UserSchema = new Schema({
	fullname: {
		type: String,
		required: "Full name is Required"
	},
    username: {
    	type: String,
    	required: "Username is Required"
    } ,
    password: {
    	type: String,
    	required: "Password is Required"
    },
    email: {
    	type: String,
    	match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    role: {
    	default: 0
    }

});

UserSchema.plugin(passportLocalMongoose);

// This creates our model from the above schema, using mongoose's model method
//object defines the schema
let User = mongoose.model("User", UserSchema);

module.exports = User;
