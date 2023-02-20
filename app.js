const express = require("express");

const feedbackRoutes = require("./routes/feedback");
const userRoutes = require("./routes/User");
const data = require("./data.json");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use((req, res) => {
  res.json(data);
});

app.use("/feedback", feedbackRoutes);
app.use("/auth", userRoutes);

module.exports = app;
