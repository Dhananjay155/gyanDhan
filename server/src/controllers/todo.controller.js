const Task = require("../models/todo");

const getAllTasks = async (req, res) => {
  try {
    const todos = await Task.find().sort({ priority: -1, dueDate: 1 });
    return res.status(200).json({ message: "Tasks fetched successfully", todos });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, desc, priority, dueDate, completed } = req.body;
    const task = await Task.create({ title, desc, priority, dueDate, completed });
    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
