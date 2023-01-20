require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const TodoRoutes = require("./Routes/TodoRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", TodoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at PORT No. ${process.env.PORT}`);
});
