import axios from "axios";
//TODO Variavel de ambiente
const apiUrl = "https://localhost:7041/Leads";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
