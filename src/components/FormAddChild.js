import SearchSchool from "./SearchSchool";
import { useState } from "react";

function FormAddChild({ schools }) {
  const [child, setChild] = useState();
  const [school, setSchool] = useState();

  const handleChangeSchool = (e) => {
    const { id, value } = e.target;
    setSchool(() => ({ [id]: value }));
    console.log(e.target);
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setChild({ [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendToBack
    console.log("child : ", child);
    console.log("school : ", school);
  };

  return (
    <>
      <form>
        <div className="form-group text-left">
          <label>Entrez le prénom de votre enfant:</label>
          <input id="childsName" onChange={handleChangeInput} />
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
