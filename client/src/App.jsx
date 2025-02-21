import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm refreshTasks={() => setRefresh(!refresh)} />
      <TaskList key={refresh} />
    </div>
  );
};

export default App;
