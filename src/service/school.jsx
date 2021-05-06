import api from "./api";

function getSchoolList() {
  return api.get("/api/schools").then((response) => response);
}

export { getSchoolList };
