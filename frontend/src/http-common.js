import axios from "axios";
import toast from "./helper/Toast";
const instance = axios.create({
  baseURL: `https://he-ide.hackerearth.com/${process.env.VUE_APP_HASH}.backend/api/`,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something went wrong!");
    }
    return Promise.reject(error);
  }
);

export default instance;
