import { useEffect, useState } from "react";
import { getTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();
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
