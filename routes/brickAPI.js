const fetch = require("node-fetch");
const express = require("express");
const axios = require("axios").default;
const router = express.Router();

router.get("/", (req, res) => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization:
				"Basic " +
				new Buffer(
					"59b792fe-f529-47e1-8605-2bd32c965797:dPYGpCStd3HXPvPyMbN40RDyiTwC6t"
				).toString("base64"),
		},
	};

	fetch("https://sandbox.onebrick.io/v1/auth/token", options)
		.then((response) => response.json())
		.then((response) => res.json(response.data.access_token))
		.catch((err) => console.error(err));
});

router.get("/userid", (req, res) => {
	const getPublic = () => {
		axios
			.get("http://localhost:3000/brick")
			.then((response) => response.data)
			.catch((err) => console.log(err));
	};

	const options = {
		method: "POST",
		url: "https://sandbox.onebrick.io/v1/auth/token/",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${getPublic()}`,
		},
		data: {
			accessToken: `${getPublic()}`,
			userId: "",
			redirectUrl: "http://localhost:3000/brick/userid",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
});

module.exports = router;
