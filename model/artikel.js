const mongoose = require("mongoose");

const artikelSchema = new mongoose.Schema({
	artikel_name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

const Artikel = mongoose.model("artikel", artikelSchema);

module.exports = Artikel;
