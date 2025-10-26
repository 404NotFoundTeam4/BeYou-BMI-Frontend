import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:4004/api"
 
  baseURL: "/api", // backend port
  //withCredentials: true, // ถ้าใช้ cookie auth
  headers: { "Content-Type": "application/json" },

});

export default api;
