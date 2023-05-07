const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
} = require("../controllers/taskController");

//Create a task
router.post("/", createTask);
//Get all tasks
router.get("/", getTasks);
//Get task by id
router.get("/:id", getTaskById);
//Delete Task by id
router.delete("/:id", deleteTaskById);
//Update task by id
router.put("/:id", updateTaskById);

module.exports = router;
