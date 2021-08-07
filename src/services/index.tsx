import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/",
});

export default api;
