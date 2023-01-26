const express = require("express");
const { home, createTodo } = require("../controllers/TodoController");

const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);

module.exports = router;
