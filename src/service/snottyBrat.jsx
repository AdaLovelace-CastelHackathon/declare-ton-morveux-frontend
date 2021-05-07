import api from "./api";

function allSnottyBrat() {
  return api.get("api/children/sick").then((response) => response);
}

// firstName, lastName, schoolId
/*
{
      firstName: firstName,
      lastName: lastName,
      school: { id: schoolId },
    }
*/
function addSnottyBrat(obj) {
  return api.post("api/children", obj).then((response) => response);
}

function getMyBrats(parentId) {
  return api
    .get(`api/children/parent/${parentId}`)
    .then((response) => response);
}

function updateStatus(obj) {
  return api.put(`api/children/`, obj).then((response) => response);
}

export { allSnottyBrat, addSnottyBrat, getMyBrats, updateStatus };
