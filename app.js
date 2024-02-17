const express = require("express");
const router = require("./src/router/api");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();
//Security Lib Imports
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database Lib Import

const mongoose = require("mongoose");

//Security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Trust the 'X-Forwarded-For' header

app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 2000,
});

app.use(limiter);

//Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Routing implementation
app.use("/tasker_api/v1", router);

//undefined routes
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "[ * Route not found * ]",
  });
});

module.exports = app;
