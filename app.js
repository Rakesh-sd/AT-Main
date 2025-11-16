var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express();
const cors = require("cors");
const { google } = require("googleapis");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





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

app.get("/contactus", (req, res) => {
  res.render("pages/contactus");
});

// app.get("/inner", (req, res) => {
//   res.render("pages/inner1");
// });

// app.get("/inner2", (req, res) => {
//   res.render("pages/inner2");
// });

app.get("/catalog", (req, res) => {
  res.render("pages/catalog");
});

app.get("/privacy-policy", (req, res) => {
  res.render("pages/privacy");
});

app.get("/terms-&-conditions", (req, res) => {
  res.render("pages/terms");
});

app.get("/refund-policy", (req, res) => {
  res.render("pages/refund");
});

// innerpages

app.get("/course", (req, res) => {
  res.render("innerpages/sample");
});

// CSE

app.get("/machine-learning", (req, res) => {
  res.render("./innerpages/machine-learning.ejs");
});

app.get("/artificial-intelligence", (req, res) => {
  res.render("./innerpages/artificial-intelligence.ejs");
});

app.get("/full-stack-web-development", (req, res) => {
  res.render("./innerpages/full-stack.ejs");
});

app.get("/data-science", (req, res) => {
  res.render("./innerpages/data-science.ejs");
});

app.get("/cyber-security", (req, res) => {
  res.render("./innerpages/cyber-security.ejs");
});

app.get("/azure-cloud", (req, res) => {
  res.render("./innerpages/azure-cloud.ejs");
});

app.get("/augmented-virtual-reality", (req, res) => {
  res.render("./innerpages/augmented-reality.ejs");
});

app.get("/android-app", (req, res) => {
  res.render("./innerpages/android-app.ejs");
});

// ECE

app.get("/iot", (req, res) => {
  res.render("./innerpages/iot.ejs");
});

app.get("/robotics", (req, res) => {
  res.render("./innerpages/robotics.ejs");
});

app.get("/embedded-system", (req, res) => {
  res.render("./innerpages/embedded-system.ejs");
});

app.get("/hybrid-electric-Vehicles", (req, res) => {
  res.render("./innerpages/hybrid-electric.ejs");
});

// Mechanical

app.get("/autocad", (req, res) => {
  res.render("./innerpages/autocad.ejs");
});
app.get("/ic-engine", (req, res) => {
  res.render("./innerpages/ic-engine.ejs");
});
app.get("/car-design", (req, res) => {
  res.render("./innerpages/car-design.ejs");
});

// Management

app.get("/digital-marketing", (req, res) => {
  res.render("./innerpages/digital-marketing.ejs");
});

app.get("/human-resource", (req, res) => {
  res.render("./innerpages/hr.ejs");
});

app.get("/business-analytics", (req, res) => {
  res.render("./innerpages/business-analytics.ejs");
});

app.get("/stock-market", (req, res) => {
  res.render("./innerpages/stock-market.ejs");
});

app.get("/marketing-management", (req, res) => {
  res.render("./innerpages/marketing.ejs");
});

app.get("/finance", (req, res) => {
  res.render("./innerpages/finance.ejs");
});

// Biotechnology

app.get("/nano-technology", (req, res) => {
  res.render("./innerpages/nano.ejs");
});
app.get("/genetic-engineering", (req, res) => {
  res.render("./innerpages/genetic.ejs");
});

// Pharmacy

app.get("/medical-coding", (req, res) => {
  res.render("./innerpages/medical-coding.ejs");
});
app.get("/pharmacovigilance", (req, res) => {
  res.render("./innerpages/pharmacovigilance.ejs");
});
app.get("/clinical-sas", (req, res) => {
  res.render("./innerpages/clinical-sas.ejs");
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
