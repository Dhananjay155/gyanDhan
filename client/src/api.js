import axios from "axios";

const API_URL = "https://gyandhan-3.onrender.com/tasks";

export const getTasks = async () => await axios.get(API_URL);
export const addTask = async (task) => await axios.post(API_URL, task);
export const updateTask = async (id, updatedTask) => await axios.put(`${API_URL}/${id}`, updatedTask);
export const deleteTask = async (id) => await axios.delete(`${API_URL}/${id}`);
