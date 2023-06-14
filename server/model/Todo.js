const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 25,
    unique: true,
  },
  tasks: [TaskSchema],
});

TodoSchema.index({ task: null }, { unique: false });

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
