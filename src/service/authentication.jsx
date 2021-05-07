import api from "./api";
import { setToken } from "./token";

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
  return api.get(`isAuthenticated`);
}
function loggingOut() {
  return api.post(`logout`);
}

export { login, register, isAuthenticated, loggingOut };
