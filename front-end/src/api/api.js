// frontend/src/api/api.js
import axios from "axios";

// Create a single Axios instance
const API = axios.create({
  baseURL: "https://agile-backend-ddva.onrender.com", // backend URL
  withCredentials: false,
});

// =======================
// MAIN ROUTES
// =======================
export const testConnection = () => API.get("/users");
export const dbCreate = () => API.get("/api/db_create");
export const dbDrop = () => API.get("/api/db_drop");

// =======================
// USER ROUTES
// =======================
export const getUsers = () => API.get("/users");
export const getUser = (userId) => API.get(`/users/${userId}`);
export const createUser = (userData) => API.post("/users", userData);
export const updateUser = (userId, userData) => API.put(`/users/${userId}`, userData);
export const deleteUser = (userId) => API.delete(`/users/${userId}`);

// =======================
// PROJECT ROUTES
// =======================
export const getProjects = () => API.get("/projects");
export const getProject = (projectId) => API.get(`/projects/${projectId}`);
export const createProject = (projectData) => API.post(`/projects`, projectData);
export const updateProject = (projectId, projectData) => API.put(`/projects/${projectId}`, projectData);
export const deleteProject = (projectId) => API.delete(`/projects/${projectId}`);


// =======================
// SPRINT ROUTES
// =======================
export const getSprints = () => API.get("/sprints");
export const getSprint = (sprintId) => API.get(`/sprints/${sprintId}`);
export const createSprint = (sprintData) => API.post("/sprints", sprintData);
export const updateSprint = (sprintId, sprintData) => API.put(`/sprints/${sprintId}`, sprintData);
export const deleteSprint = (sprintId) => API.delete(`/sprints/${sprintId}`);

// =======================
// TASK ROUTES
// =======================
export const getTasks = () => API.get("/tasks");
export const getTask = (taskId) => API.get(`/tasks/${taskId}`);
export const createTask = (taskData) => API.post("/tasks", taskData);
export const updateTask = (taskId, taskData) => API.put(`/tasks/${taskId}`, taskData);
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);

// Export the Axios instance if needed
export default API;