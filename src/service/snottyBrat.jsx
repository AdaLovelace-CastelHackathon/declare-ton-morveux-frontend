import api from "./api";

function allSnottyBrat() {
  api.get("api/children/sick").then((response) => response);
}

export { allSnottyBrat };
