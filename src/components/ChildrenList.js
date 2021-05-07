function ChildrenList({ setHasDeclared, hasDeclared, myBrats }) {
  // const lists = ["toto", "bobby"];
  return (
    <>
      {myBrats && myBrats.length > 0 ? (
        <>
          {myBrats.map((e, i) => (
            <div key={i} className="form-check">
              <div className="mb-3 row">
                <label
                  htmlFor={e.firstName}
                  className="col-sm-2 col-form-label"
                >
                  Le prénom du morveux
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id={e.firstName}
                    value={e.firstName}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="form-check-label" htmlFor="malade">
                  malade
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="child"
                  id="malade"
                />
              </div>
              <div className="mb-3 row">
                <label className="form-check-label" htmlFor="contagieux">
                  contagieux
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="child"
                  id="contagieux"
                />
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => setHasDeclared(!hasDeclared)}
          >
            Mettre à jour l'état{" "}
            {myBrats.length > 1 ? "des enfants" : "de l'enfant"}
          </button>
        </>
      ) : (
        <p>Vous n'avez pas de morveux inscrit</p>
      )}
    </>
  );
}

export default ChildrenList;
