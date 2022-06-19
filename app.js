var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const api = require("./routes/api");
const finance = require("./routes/financeRecord");
const artikel = require("./routes/artikel");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/brick", api);
app.use("/finance", finance);
app.use("/artikel", artikel);

// connect db with mongoose
mongoose
	.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DB is connected");
	})
	.catch((err) => {
		console.log(err);
	});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});
module.exports = app;
