// const config = require("config3");
const express = require("express");

const app = express();

app.use("/api/v1/posts", require("./posts"));

module.exports = app;
