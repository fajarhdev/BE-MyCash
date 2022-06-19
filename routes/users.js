var express = require("express");
const { getOne, postOne } = require("../controller/userController");

var router = express.Router();

router.get("/", getOne);

router.post("/", postOne);

module.exports = router;
