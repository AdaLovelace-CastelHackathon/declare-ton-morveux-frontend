import { useEffect, useState } from "react";

import { updateStatus } from "../service/snottyBrat";

function ChildrenList({ setHasDeclared, hasDeclared, myBrats }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const lesBool = myBrats.map((e) => {
      return [e.contagious, e.sick];
    });
    setState(lesBool);
    console.log(lesBool);
  }, []);

  console.log(myBrats);

  const handleChange = (e) => {
    const { id, checked, name } = e.target;
    const index = e.target.getAttribute("data-key");
    const arr = state;

    if (id == "contagious") {
      state[index] = [checked, state[index][1]];
    } else {
      state[index] = [state[index][0], checked];
    }
    console.log(state[index]);

    console.log(e.target.getAttribute("data-key"));
    console.log("handlechange", id, checked, name);
  };

  const handleClickSnottyStatus = (e) => {
    e.preventDefault();

    const index = e.target.getAttribute("data-key");
    const bools = state[index];

    // const update = {
    //   id: e.target.id,
    //   contagious: bools[0],
    //   sick: bools[1],
    // };

    // updateStatus(update).then((response) =>
    //   console.log("my sick brat: ", response)
    // );

    setHasDeclared(!hasDeclared);
  };

  return (
    <>
      {myBrats && myBrats.length > 0 ? (
        <>
          {myBrats.map((e, i) => (
            <form
              key={i}
              data-key={i}
              className="form-check border-bottom border-1"
            >
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
                  name={e.i}
                  id="sick"
                  indeterminate={e.sick.toString()}
                  onChange={handleChange}
                  defaultChecked={e.sick}
                  data-key={i}
                />
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="contagious">
                  contagieux
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={e.i}
                  id="contagious"
                  indeterminate={e.contagious.toString()}
                  onChange={handleChange}
                  defaultChecked={e.contagious}
                  data-key={i}
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
