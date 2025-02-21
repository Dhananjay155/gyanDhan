import { useState } from "react";
import axios from "axios";

const API_URL = "https://gyandhan-4.onrender.com/tasks/";

const TaskItem = ({ task, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleUpdate = async () => {
    await axios.put(`${API_URL}${task._id}`, updatedTask);
    setIsEditing(false);
    refreshTasks();
  };

  const handleDelete = async () => {
    await axios.delete(`${API_URL}${task._id}`);
    refreshTasks();
  };

  const toggleComplete = async () => {
    await axios.put(`${API_URL}${task._id}`, { ...task, completed: !task.completed });
    refreshTasks();
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input type="text" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} />
          <textarea value={updatedTask.desc} onChange={(e) => setUpdatedTask({ ...updatedTask, desc: e.target.value })} />
          <select value={updatedTask.priority} onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.desc}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.completed ? "✅ Completed" : "❌ Not Completed"}</p>
          <button onClick={toggleComplete}>{task.completed ? "Undo" : "Complete"}</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} style={{ background: "red" }}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
