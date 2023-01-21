const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to Database Successfully"))
    .catch((error) => {
      console.log(error);
      console.log("Failed to connect to Database");
      process.exit(1);
    });
};
