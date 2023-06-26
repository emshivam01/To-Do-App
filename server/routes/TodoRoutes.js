const express = require("express");
const {
  home,
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/TodoController");
const {
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/TaskController");

const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/editTodo/:id", editTodo);

// Task Routes

router.post("/createTask/:id", createTask);
router.delete("/deleteTask/:id/:taskId", deleteTask);
router.put("/editTask/:id", editTask);

module.exports = router;
