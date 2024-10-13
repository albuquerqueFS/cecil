import Axios from "axios";

if (!import.meta.env.VITE_BACKEND_URL) {
  throw new Error(
    "env variable not set: BASE_URL (did you forget to create a .env file from .env.template?)"
  );
}

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URLBASE_URL,
});
