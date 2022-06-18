var request = require('request');

request({
    method: 'GET',
    url: 'https://sandbox.onebrick.io/v1/auth/token',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic MDQ5M2YxMDItNzg3Mi00MzQ1LWJkYzgtYTk0NDJiYWEzMzAwOjhJVFd1OGYwS0NCYkowYUhmdUZvamN4YTBvTHQ5dw=='
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});
