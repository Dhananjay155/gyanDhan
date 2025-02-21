const express = require("express");
const { getAllTasks, createTask, updateTask, deleteTask } = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
