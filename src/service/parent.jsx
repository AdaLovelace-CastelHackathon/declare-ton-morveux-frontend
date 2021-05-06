import api from "./api";

function getMyInfo() {
  return api.get("api/parents/me").then((response) => response);
}

export { getMyInfo };
