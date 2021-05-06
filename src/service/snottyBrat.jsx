import api from "./api";

function allSnottyBrat() {
  return api.get("api/children/sick").then((response) => response);
}

export { allSnottyBrat };
