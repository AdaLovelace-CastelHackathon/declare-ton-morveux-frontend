import FormAddChild from "./FormAddChild";
import ChildrenList from "./ChildrenList";

import { getMyInfo } from "../service/parent";
import { getMyBrats } from "../service/snottyBrat";
import { useState } from "react";

function PageDeclare({ setHasDeclared, hasDeclared, schools }) {
  // const [myId, setMyId] = useState();
  const [myBrats, setMyBrats] = useState();

  const handleClickSnottyBrats = () => {
    // getMyInfo().then((response) => setMyId(response.data.id));
    // getMyBrats(myId).then((response) => setMyBrats(response.data));

    getMyInfo().then((response) =>
      getMyBrats(response.data.id).then((response) => setMyBrats(response.data))
    );
  };

  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setHasDeclared(!hasDeclared)}
      >
        Retour
      </button>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Ajouter un morveux
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <FormAddChild schools={schools} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              onClick={handleClickSnottyBrats}
            >
              Liste de morveux
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ChildrenList
                setHasDeclared={setHasDeclared}
                hasDeclared={hasDeclared}
                myBrats={myBrats}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDeclare;
