var express = require("express");
const { getOne, getAll, postOne } = require("../controller/userController");

var router = express.Router();

router.get("/", getAll);

router.get("/", getOne);

router.post("/", postOne);

module.exports = router;
