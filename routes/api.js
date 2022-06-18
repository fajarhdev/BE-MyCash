const express = require("express");
const router = express.Router();
const sdk = require("../brick/brick");

//
router.get("/", (req, res, next) => {
	res.send(sdk.listInstitution());
});

module.exports = router;
