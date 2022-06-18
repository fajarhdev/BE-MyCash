var express = require("express");
var router = express.Router();
const sdk = require("../brick/brick");

router.post("/signup", (req, res, next) => {
	res.send();
});

/* GET users listing. */
router.get("/{:id}", function (req, res, next) {
	res.send(req.params.id);
});

module.exports = router;
