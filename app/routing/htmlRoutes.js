const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile("home.html");
});

app.get("/survey", function(req, res) {
  res.sendFile("survey.html");
});