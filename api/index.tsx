import axios from "axios";

export const dataAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
