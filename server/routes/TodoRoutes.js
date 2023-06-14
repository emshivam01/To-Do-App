const express = require("express");
const {
  home,
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/TodoController");
const { createTask } = require("../controllers/TaskController");

const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.get("/deleteTodo/:id", deleteTodo);
router.get("/editTodo/:id", editTodo);

// Task Routes

router.post("/createTask/:id", createTask);

module.exports = router;
