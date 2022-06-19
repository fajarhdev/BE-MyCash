const fetch = require("node-fetch");

const options = {
	method: "GET",
	headers: {
		Accept: "application/json",
		Authorization:
			"Basic " +
			new Buffer("59b792fe-f529-47e1-8605-2bd32c965797:dPYGpCStd3HXPvPyMbN40RDyiTwC6t").toString(
				"base64"
			),
	},
};

fetch("https://sandbox.onebrick.io/v1/auth/token", options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
