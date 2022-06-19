const mongoose = require("mongoose");

const financeRecordSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: "user",
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	nameTransaction: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	total: {
		type: Number,
	},
});

const FinanceRecord = mongoose.model("financeRecord", financeRecordSchema);

module.exports = FinanceRecord;
