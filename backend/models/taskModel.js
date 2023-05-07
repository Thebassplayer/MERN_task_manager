const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide task name"],
      trim: true,
      maxlength: [20, "Name cannot be more than 20 characters"],
      minlength: [3, "Name must be at least 3 characters"],
    },
    completed: {
      type: Boolean,
      required: [true, "Must provide task completed status"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
