function ChildrenList({ setHasDeclared, hasDeclared }) {
  const lists = ["toto", "bobby"];
  return (
    <>
      {lists.map((e, i) => (
        <div key={i} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="child"
            id={e}
          />
          <label className="form-check-label" htmlFor={e}>
            {e}
          </label>
        </div>
      ))}
      <button
        className="btn btn-primary"
        onClick={() => setHasDeclared(!hasDeclared)}
      >
        Mettre à jour l'état {lists.length > 1 ? "des enfants" : "de l'enfant"}
      </button>
    </>
  );
}

export default ChildrenList;
