import api from "./api";
import { removeToken, setToken } from "./token";

function login(username, password) {
  return api
    .post(`authenticate`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.token;
      setToken(token);
      return token;
    });
}

function logout() {
  removeToken();
}

function register(username, password) {
  return api
    .post(`register`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.token;
      setToken(token);
      return token;
    });
}

function isAuthenticated() {
  return api.get(`isAuthenticated`).then((response) => response);
}

export { login, logout, register, isAuthenticated };
