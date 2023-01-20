const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((res) => {
      console.log("Connected to DB Succefully");
    })
    .catch((error) => {});
  console.log(error);
  console.log("Failed to connect to DB");
};

module.exports = dbConnection;
