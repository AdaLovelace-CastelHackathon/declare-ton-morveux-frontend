function SearchSchool() {
  const schoolLists = [
    "some school",
    "the other one",
    "the other other school",
  ];

  return (
    <>
      <label htmlFor="school-choice">Choisissez une école :</label>
      <input list="school-lists" id="school-choice" name="school-choice" />

      <datalist id="school-lists">
        {schoolLists.map((e, i) => (
          <option key={i} value={e} />
        ))}
      </datalist>
    </>
  );
}

export default SearchSchool;
