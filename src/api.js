// src/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api", // backend base URL
  baseURL: "https://dummy-backend-i0bs.onrender.com/",
});

export default api;
