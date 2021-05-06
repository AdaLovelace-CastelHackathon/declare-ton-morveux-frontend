import axios from "axios";

import { getToken, removeToken } from "./token";

// TODO : add baseURL

const REACT_APP_API_BASE_URL = "";

const defaultOptions = {
  baseURL: REACT_APP_API_BASE_URL,
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
const api = axios.create(defaultOptions);

api.interceptors.request.use((config) => {
  const token = getToken();
  console.log(`interceptors request with token ${token}`);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    console.log("interceptors response : ", res);
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      removeToken();
      throw new Error(`Invalid token`);
    }
    throw err;
  }
);

export default api;
