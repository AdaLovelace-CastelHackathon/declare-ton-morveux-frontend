import api from "./api";
import { removeToken, setToken } from "./token";

// TODO : add paths

function login(username, password) {
  return api
    .post(``, {
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
    .post(``, {
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
  return api.get(``).then((response) => response);
}

export { login, logout, register, isUserLoggedIn, isAuthenticated };
