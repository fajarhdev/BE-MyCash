const FinanceRecord = require("../model/financeRecord");

// ambil data finance record per akun
const getFinanceRecord = async (req, res) => {
	try {
		const financeRecord = await FinanceRecord.find({ user_id: req.params.id });
		res.json(financeRecord);
	} catch (error) {
		res.json(error.message);
	}
};

// untuk mengirim data yang user inputkan
const postFinanceRecord = async (req, res) => {
	const financeRecord = new FinanceRecord(req.body);
	try {
		const saveFinanceRecord = await financeRecord.save();
		res.json(saveFinanceRecord);
	} catch (error) {
		res.json(error.message);
	}
};

// const deleteFinanceRecord = async (req, res) => {
// 	try {
// 		const delFinanceRecord = await FinanceRecord.deleteOne({ _id: req.params.id });
// 		res.json(delFinanceRecord);
// 	} catch (error) {
// 		res.json(error.message);
// 	}
// };

module.exports = { getFinanceRecord, postFinanceRecord };
