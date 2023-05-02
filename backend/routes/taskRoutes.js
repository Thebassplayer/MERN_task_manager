const dotenv = require("dotenv").config();
const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
} = require("../controllers/taskController");

//Create a task
router.post("/api/tasks", createTask);

//Get all tasks
router.get("/api/tasks", getTasks);

//Get task by id
router.get("/api/tasks/:id", getTaskById);

module.exports = router;
