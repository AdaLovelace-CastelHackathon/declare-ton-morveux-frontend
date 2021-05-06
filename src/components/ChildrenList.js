function ChildrenList({ setHasDeclared, hasDeclared, myBrats }) {
  // const lists = ["toto", "bobby"];
  return (
    <>
      {myBrats && myBrats.length > 0 ? (
        <>
          {myBrats.map((e, i) => (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="child"
                id={e}
              />
              <label className="form-check-label" htmlFor={e.firstName}>
                {e.firstName}
              </label>
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
