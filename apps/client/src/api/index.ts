import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://phonefinder-api-68hbi.ondigitalocean.app/"
    : "http://localhost:3000/",
});

export default api;
