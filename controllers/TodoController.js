const Todo = require("../model/Todo");

const home = (req, res) => {
  res.status(200).send("Welcome to home page");
};

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.send("Please enter title");
    }

    const newTodo = new Todo({ title });
    const res = await newTodo.save();

    if (!res) {
      res.status(404).json({
        success: false,
        message: "Failed to create todo",
      });
    } else {
      res.status(201).json({
        success: true,
        message: " Todo Created Successfully",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.send(401).json({
      success: false,
      message: "Failed to connect to Todo",
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId);

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo Doesn't exist",
      });
    } else {
      res.status(200).json({
        success: true,
        todo,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    if (!todos) {
      res.status(404).json({
        success: false,
        message: "Couldn't find todos",
      });
    } else {
      res.status(200).json({
        success: true,
        todos,
      });
    }
  } catch (error) {
    return error.message;
  }
};

const createTask = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { task } = req.body;

    if (!todoId) {
      res.status(404).json({
        success: false,
        message: "Incorrect todo id",
      });
    } else {
      const todo = await Todo.findById(todoId);

      todo.task.push(task);
      await todo.save();

      res.status(200).json({
        success: true,
        message: "Task Created Successfully",
        task,
      });
    }
  } catch (error) {
    return error.message;
  }
};

const editTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title } = req.body;

    if (!todoId && !title) {
      res.status(404).json({
        success: false,
        message: "Can't find Todo",
      });
    } else {
      const todo = await Todo.findByIdAndUpdate(todoId, { title });
      if (!todo) {
        res.status(500).json({
          success: false,
          message: "Couldn't Update Todo",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Successfully Updated Todo",
          todo,
        });
      }
    }
  } catch (error) {
    return error.message;
  }
};

const editTask = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { task } = req.body;

    if (!todoId) {
      res.status(404).json({
        success: false,
        message: "Couldn't find todoId",
      });
    }

    const todo = await Todo.findByIdAndUpdate(todoId,{
      $set: {
        task.
      }
    });



  } catch (error) {
    return error.message;
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    if (!todoId) {
      res.status(404).json({
        success: false,
        message: "Couldn't find todoId",
      });
    }

    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      res.status(500).json({
        success: true,
        message: "Couldn't delete Todo",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Todo Deleted Successfully",
        deletedTodo,
      });
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { home, createTodo, getTodo };
