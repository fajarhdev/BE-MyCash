const express = require("express");
const {
	getArtikel,
	postArtikel,
	updateArtikel,
	deleteArtikel,
} = require("../controller/artikelController");

const router = express.Router();

router.get("/", getArtikel);

router.post("/", postArtikel);

router.patch("/:id", updateArtikel);

router.delete("/:id", deleteArtikel);

module.exports = router;
