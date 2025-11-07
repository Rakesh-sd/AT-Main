var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// routes
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/aboutus", (req, res) => {
  res.render("pages/aboutus");
});

app.get("/inner", (req, res) => {
  res.render("pages/inner");
});

app.get("/inner2", (req, res) => {
  res.render("pages/inner2");
});

app.get("/sample", (req, res) => {
  res.render("pages/sample");
});

// error handling
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
