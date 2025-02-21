import { useState } from "react";
import axios from "axios";

const API_URL = "https://gyandhan-4.onrender.com/tasks/";

const TaskForm = ({ refreshTasks }) => {
  const [task, setTask] = useState({ title: "", desc: "", priority: "Medium", dueDate: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, task);
    refreshTasks();
    setTask({ title: "", desc: "", priority: "Medium", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <textarea placeholder="Description" value={task.desc} onChange={(e) => setTask({ ...task, desc: e.target.value })}></textarea>
      <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
