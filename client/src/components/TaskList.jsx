import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const API_URL = "https://gyandhan-4.onrender.com/tasks/";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await axios.get(API_URL);
    setTasks(data.todos);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} refreshTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;
