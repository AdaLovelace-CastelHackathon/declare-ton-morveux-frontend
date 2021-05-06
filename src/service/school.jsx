import api from "./api";

function getSchoolList() {
  return api.get("/api/schools").then((response) => response);
}

function getSchoolsInfo(id) {
  return api.get(`api/schools/${id}`).then((response) => response);
}

export { getSchoolList, getSchoolsInfo };
