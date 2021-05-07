function SearchSchool({ handleChangeSchool, passedId, schools }) {
  return (
    <>
      <label className="form-check-label" htmlFor={passedId}>
        Choisissez une école
      </label>
      <input
        list="school-lists"
        id={passedId}
        name="school-choice"
        onChange={handleChangeSchool}
        placeholder="Cliquez ou entrez une école"
      />

      <datalist id="school-lists">
        {schools.map((e, i) => (
          <option key={e.id} value={e.name} />
        ))}
      </datalist>
    </>
  );
}

export default SearchSchool;
