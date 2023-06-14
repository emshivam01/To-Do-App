const Todo = require("../model/Todo");

const createTask = async (req, res) => {
  const { taskDesc } = req.body;
  const { id } = req.params;

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

module.exports = { createTask };

module.exports = { createTask };
