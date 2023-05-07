const Task = require("../models/taskModel");

//Create a task
const createTask = async (req, res) => {
  try {
    const data = req.body;
    const task = await Task.create(data);
    res.status(200).json(task);
    console.log(req.body);
  } catch (error) {
    res.status(500).json(error.errors.name.message);
  }
};

//Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error.errors.name.message);
  }
};

//Get task by id
const getTaskById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error.errors.name.message);
  }
};

//Delete Task by id
const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json(error.errors.name.message);
  }
};

//Update task by id
const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const task = await Task.findByIdAndUpdate(
      {
        _id: id,
      },
      data,
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error.errors.name.message);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
};
