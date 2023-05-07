import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = e => {
    e.preventDefault();
    try {
      if (name === "") {
        return toast.error("Please enter a task name");
      }
      axios
        .post("http://localhost:5002/api/tasks", formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("-----", error.response.data.msg);
          toast.error(error.message);
        });
      setFormData({ ...formData, name: "" });
    } catch (error) {}
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b>
        </p>
        <p>
          <b>Completed Tasks:</b>
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
};

export default TaskList;
