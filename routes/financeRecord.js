const express = require("express");
const {
	getFinanceRecord,
	postFinanceRecord,
	deleteFinanceRecord,
} = require("../controller/financeRecordController");

const router = express.Router();

router.get("/:id", getFinanceRecord);

router.post("/", postFinanceRecord);

router.delete("/:id", deleteFinanceRecord);

module.exports = router;
