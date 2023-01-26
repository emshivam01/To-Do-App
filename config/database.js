const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("Connected To DB successfully");
    })
    .catch((error) => {
      console.log(error.message);
      console.log("DB Connection failed");
      process.exit(1);
    });
};

module.exports = dbConnection;
