const express = require("express");
const router = express.Router();
var request = require("request");

router.get("/", (req, res, next) => {
	request(
		{
			method: "GET",
			url: "https://sandbox.onebrick.io/v1/auth/token",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Basic MDQ5M2YxMDItNzg3Mi00MzQ1LWJkYzgtYTk0NDJiYWEzMzAwOjhJVFd1OGYwS0NCYkowYUhmdUZvamN4YTBvTHQ5dw==",
			},
		},
		function (error, response, body) {
			// console.log('Status:', response.statusCode);
			// console.log('Headers:', JSON.stringify(response.headers));
			// console.log('Response:', body);

			const raw = JSON.parse(body);
			const { data } = raw;
			// const token = JSON.stringify(data.access_token);
			const token = data.access_token;
			// console.log('Public_Token:', token);
			// module.exports = { token };
			console.log(token);
			res.json(token);
			return token;
		}
	);
});
