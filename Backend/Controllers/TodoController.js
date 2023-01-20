const Todo = require("../Models/Todo");

const home = (req, res) => {
  res.send("Welcome to To-Do App");
};

const getTodos = async (req, res) => {
  const Todos = await Todo.find();

  if (!Todos) {
    res.status(400).send("No Todos Found");
  }
  res.status(200).json(Todos);
};

const getTodo = async (req, res) => {
  const { todoId } = req.params;

  const Todo = await Todo.findById(todoId);

  if (!Todo) {
    res.status(400).send("No Todo Found");
  }
  res.json(Todo);
};

const createTodo = async (req, res) => {
  //   try {
  //     const { title } = req.body;

  //     const newTodo = Todo.create({ title });

  //     res.status(200).json(newTodo);
  //   } catch (error) {
  //     res.status(400).send("Error at createTodo Controller");
  //   }

  const newTodo = new Todo({ title: req.body });
  const createdNewTodo = await newTodo.save();
  res.json(newTodo);
};

const createTask = async (req, res) => {
  try {
    const { TodoId } = req.params;
    const { text } = req.body;
    const Todo = await Todo.findById(TodoId);

    // Accprding to me this case won't happend even

    if (!Todo) {
      res.status(400).send("No Todo Found");
    }

    Todo.task.push(text);
    const savedTask = await Todo.save();
  } catch (error) {
    console.log("Error at createTask");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { TodoId } = req.params;
    const Todo = await Todo.findByIdAndDelete(TodoId);
    res.status(200).json(Todo);
  } catch (error) {
    console.log("Error at deleteTodo");
  }
};

module.exports = { home, getTodos, createTodo };
