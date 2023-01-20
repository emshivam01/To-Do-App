const express = require("express");
const { home, getTodos, createTodo } = require("../Controllers/TodoController");
const router = express.Router();

router.get("/", home);
router.post("/createTodo, createTodo");
// router.post("/getTodos, getTodos");
// router.post("/getTodos, getTodos");

module.exports = router;
