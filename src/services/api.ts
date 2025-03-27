import axios from "axios";

// Pegando a variável de ambiente do Vite
//const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", apiUrl);

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
