function ChildrenList({ setHasDeclared, hasDeclared, myBrats }) {
  const handleClickSnottyStatus = () => {
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
                <label className="form-check-label" htmlFor="malade">
                  malade
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="malade"
                  id="malade"
                />
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="contagieux">
                  contagieux
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="contagieux"
                  id="contagieux"
                />
              </div>
              <button
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
