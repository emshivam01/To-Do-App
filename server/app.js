require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbConnection = require("./config/database");
const todoRouter = require("./routes/TodoRoutes");

dbConnection();
app.use("/", todoRouter);

module.exports = app;
