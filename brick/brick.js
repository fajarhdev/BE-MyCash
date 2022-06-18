const { BrickSDK, ENVIRONMENT } = require("onebrick-node-sdk");

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const name = process.env.COMPANY_NAME;
const url = "https://sandbox.onebrick.io/v1/auth/token";

let sdk = new BrickSDK(clientId, clientSecret, ENVIRONMENT.SANDBOX, name, url);
let a = await sdk.requestAccessToken();
let b = await sdk.requestAuthentication();

module.exports = sdk;
