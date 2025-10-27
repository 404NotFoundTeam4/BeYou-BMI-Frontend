import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const api = axios.create({
  baseURL: API_URL, // backend port
  //withCredentials: true, // ถ้าใช้ cookie auth
  headers: { "Content-Type": "application/json" },
});

export default api;
