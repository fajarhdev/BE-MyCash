const User = require("../model/user");

const getOne = async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	try {
		const user = await User.findOne({ email: email, password: password });
		res.json(user);
		// console.log(user);
	} catch (error) {
		res.json(error.message);
	}
};

const postOne = async (req, res) => {
	const user = new User(req.body);
	try {
		const saveUser = await user.save();
		res.json(saveUser);
	} catch (error) {
		res.json(error.message);
	}
};

const getAll = async (req, res) => {
	try {
		const user = await User.find();
		res.json(user);
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = { getOne, postOne, getAll };
