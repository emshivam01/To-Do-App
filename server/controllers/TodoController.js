const Todo = require("../model/Todo");

const home = (req, res) => {
  res.status(200).send("Welcome to home page");
};

const createTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(404).send("Please enter a title");
  }

  try {
    const todo = new Todo({ title });
    const data = await todo.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const editTodo = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(id, { title });

    res.status(200).json({ status: "success", data: todo });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ status: "success", data: todos });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    res.status(200).json({ status: "success", data: todo });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ status: "success", data: todo });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { home, createTodo, getTodos, getTodo, deleteTodo, editTodo };
