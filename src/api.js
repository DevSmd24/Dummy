// src/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api", // backend base URL
 // baseURL: "https://dummy-backend-i0bs.onrender.com/api",
  baseURL: "http://13.211.109.49/api",
});

export default api;
