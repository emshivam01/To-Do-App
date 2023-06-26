const Todo = require("../model/Todo");

const createTask = async (req, res) => {
  const { taskDesc } = req.body;
  const { id } = req.params;

  console.log(taskDesc);

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const task = {
      description: taskDesc,
      checked: false,
    };

    todo.tasks.push(task);
    const updatedTodo = await todo.save();

    res.status(200).json({ status: "success", data: updatedTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { newDesc } = req.body;
  const { taskId } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: id, "tasks._id": taskId },
      { $set: { "tasks.$.description": newDesc } },
      { new: true }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { taskId } = req.params;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({
        status: "success",
        data: todo,
        message: "Task successfully deleted",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, editTask, deleteTask };
