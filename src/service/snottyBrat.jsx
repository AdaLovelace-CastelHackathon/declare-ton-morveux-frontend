import api from "./api";

function allSnottyBrat() {
  return api.get("api/children/sick").then((response) => response);
}

function addSnottyBrat({ firstName, lastName, schoolId }) {
  return api
    .post("api/children", {
      firstName,
      lastName,
      school: { id: schoolId },
    })
    .then((response) => response);
}

function getMyBrats(parentId) {
  return api
    .get(`api/children/parent/${parentId}`)
    .then((response) => response);
}

export { allSnottyBrat, addSnottyBrat, getMyBrats };
