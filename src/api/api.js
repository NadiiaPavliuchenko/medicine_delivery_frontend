import axios from "axios";

const api = axios.create({
  baseURL: "https://medicine-delivery-backend-t1jj.onrender.com/",
});

export default api;
