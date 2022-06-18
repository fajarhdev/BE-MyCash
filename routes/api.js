const express = require("express");
const router = express.Router();
const { token } = require("../brick/brick");

router.get("/", (req, res, next) => {
	res.json(token);
	console.log(`From API: ${token}`);
});

module.exports = router;
