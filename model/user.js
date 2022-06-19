const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	balance: {
		type: Number,
	},
	income: {
		type: Number,
	},
	expense: {
		type: Number,
	},
});

const User = mongoose.model("user", UserSchema, "user");

module.exports = User;
