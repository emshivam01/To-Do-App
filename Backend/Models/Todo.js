const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: [25, "Title can be only 35 Character long"],
  },
  task: {
    type: [String],
    unique: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
