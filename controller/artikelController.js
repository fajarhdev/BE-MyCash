const Artikel = require("../model/artikel");

const getArtikel = async (req, res) => {
	try {
		const artikel = await Artikel.find();
		res.json(artikel);
	} catch (error) {
		res.json(error.message);
	}
};

const postArtikel = async (req, res) => {
	const artikel = new Artikel(req.body);
	try {
		const saveArtikel = await artikel.save();
		res.json(saveArtikel);
	} catch (error) {
		res.json(error.message);
	}
};

const updateArtikel = async (req, res) => {
	try {
		const upArtikel = Artikel.updateOne({ _id: req.params.id }, { $set: req.body });
		res.json(upArtikel);
	} catch (error) {
		res.json(error.message);
	}
};

const deleteArtikel = async (req, res) => {
	try {
		const delArtikel = Artikel.deleteOne({ _id: req.params.id });
		res.json(delArtikel);
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = { getArtikel, postArtikel, updateArtikel, deleteArtikel };
