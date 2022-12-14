var createError = require("http-errors");
var express = require("express");
var path = require("path");
var prompt = require("prompt-sync")({ sigint: true });
var logger = require("morgan");

const mongoose = require("mongoose");
const config = require("./config");

const psw = prompt.hide("Insert password: ");
const url = config.mongoUrl(psw);

const connect = mongoose.connect(url);
var indexRouter = require("./routes/index");
var jokesRouter = require("./routes/jokes");

connect.then(
  (db) => {
    console.log("Connected to the server");
  },
  (err) => {
    console.log(err);
    process.exit();
  }
);

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/jokes", jokesRouter);

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
