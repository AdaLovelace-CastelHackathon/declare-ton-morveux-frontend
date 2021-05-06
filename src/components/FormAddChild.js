import SearchSchool from "./SearchSchool";
import { useState } from "react";

import { addSnottyBrat } from "../service/snottyBrat";

function FormAddChild({ schools }) {
  const [child, setChild] = useState({ firstName: "", lastName: "" });
  const [school, setSchool] = useState();

  const handleChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setChild((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = child;
    const schoolObj = schools.find((e) => e.name.includes(school));
    // console.log(firstName, lastName, schoolObj.id);
    addSnottyBrat(firstName, lastName, schoolObj.id).then((response) =>
      console.log(response.data)
    );
  };

  return (
    <>
      <form>
        <div className="form-group text-left">
          <label>Prénom du morveux :</label>
          <input id="firstName" onChange={handleChangeInput} />
        </div>
        <div className="form-group text-left">
          <label>Nom de famille du morveux :</label>
          <input id="lastName" onChange={handleChangeInput} />
        </div>
        <div className="form-group text-left">
          <SearchSchool
            passedId="add-child-shool-list"
            handleChangeSchool={handleChangeSchool}
            schools={schools}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Ajoutez
        </button>
      </form>
    </>
  );
}

export default FormAddChild;
