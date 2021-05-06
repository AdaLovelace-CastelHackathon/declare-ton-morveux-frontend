function SearchSchool({ handleChangeSchool, passedId, schools }) {
  // const schoolLists = [
  //   {
  //     school: "some school",
  //     id: 0,
  //   },
  //   {
  //     school: "the other one",
  //     id: 1,
  //   },
  //   {
  //     school: "the other other school",
  //     id: 2,
  //   },
  // ];

  return (
    <>
      <label htmlFor={passedId}>Choisissez une école :</label>
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
