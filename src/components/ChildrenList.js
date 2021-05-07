import { useState } from "react";

import { updateStatus } from "../service/snottyBrat";

function ChildrenList({ setHasDeclared, hasDeclared, myBrats }) {
  const [state, setState] = useState({ contagious: false, sick: false });

  const handleChange = (e) => {
    const { id, checked } = e.target;

    setState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleClickSnottyStatus = (e) => {
    e.preventDefault();
    const { sick, contagious } = state;
    updateStatus(sick, contagious, e.target.id).then((response) =>
      console.log("my sick brat: ", response)
    );

    setHasDeclared(!hasDeclared);
  };

  return (
    <>
      {myBrats && myBrats.length > 0 ? (
        <>
          {myBrats.map((e, i) => (
            <form key={i} className="form-check border-bottom border-1">
              <div className="mb-3 row">
                <label
                  htmlFor={e.firstName}
                  className="col-sm-8 col-form-label"
                >
                  Le prénom du morveux :
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id={e.firstName}
                    value={e.firstName}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-check-label" htmlFor="sick">
                  malade
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="malade"
                  id="sick"
                  indeterminate={e.sick.toString()}
                  onChange={handleChange}
                  defaultChecked={e.sick}
                />
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="contagious">
                  contagieux
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="contagieux"
                  id="contagious"
                  indeterminate={e.contagious.toString()}
                  onChange={handleChange}
                  defaultChecked={e.contagious}
                />
              </div>
              <button
                id={e.id}
                className="btn btn-primary mb-2"
                onClick={handleClickSnottyStatus}
              >
                Mettre à jour l'état de ce morveux
              </button>
            </form>
          ))}
        </>
      ) : (
        <p>Vous n'avez pas de morveux inscrit</p>
      )}
    </>
  );
}

export default ChildrenList;
