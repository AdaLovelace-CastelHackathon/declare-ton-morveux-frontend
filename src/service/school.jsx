import api from "axios";

function getSchoolList() {
  api.get("/api/schools").then((response) => response);
}

export { getSchoolList };
