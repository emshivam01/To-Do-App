require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbConnection = require("./config/database");
const todoRouter = require("./routes/TodoRoutes");

dbConnection();
app.use("/", todoRouter);

module.exports = app;
