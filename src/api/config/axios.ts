import Axios from "axios";

if (!import.meta.env.VITE_BACKEND_URL) {
  throw new Error(
    "env variable not set: BASE_URL (did you forget to create a .env file from .env.template?)"
  );
}

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});

const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

const token = localStorage.getItem("token");
setAuthToken(token);

export { axios, setAuthToken };
