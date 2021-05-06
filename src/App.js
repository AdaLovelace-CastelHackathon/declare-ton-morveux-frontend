import MenuHome from "./components/MenuHome";
import AuthenticatePage from "./components/AuthenticatePage";
import SearchSchool from "./components/SearchSchool";
import PageDeclare from "./components/PageDeclare";

import { useEffect, useState } from "react";

import { isAuthenticated } from "./service/authentication";
import { getSchoolList } from "./service/school";
import { allSnottyBrat } from "./service/snottyBrat";

function App() {
  const [hasDeclared, setHasDeclared] = useState(false);
  const [contaminated, setContaminated] = useState(0);
  const [schools, setSchools] = useState([]);
  const [school, setSchool] = useState();
  const [isAuth, setIsAuth] = useState();

  const handleChangeSchool = (e) => {
    const { id, value } = e.target;
    setSchool(() => ({ [id]: value }));
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendToBack
    console.log("school : ", school);
  };

  useEffect(() => {
    isAuthenticated().then((response) => setIsAuth(response.data));

    getSchoolList().then((response) => setSchools(response.data));
    allSnottyBrat().then((response) => setContaminated(response.data.sick));
  }, []);

  if (hasDeclared && !isAuth) {
    return (
      <AuthenticatePage
        setHasDeclared={setHasDeclared}
        hasDeclared={hasDeclared}
        setIsAuth={setIsAuth}
      />
    );
  }
  if (hasDeclared && isAuth) {
    return (
      <PageDeclare
        setHasDeclared={setHasDeclared}
        hasDeclared={hasDeclared}
        schools={schools}
      />
    );
  }

  return (
    <div className="contaier-fluid">
      <MenuHome
        setHasDeclared={setHasDeclared}
        setIsAuth={setIsAuth}
        isAuth={isAuth}
      />
      <h1 className="text-center mb-3">
        Bienvenue sur <br /> Déclare ton Morveux
      </h1>
      <h2 className="text-center mb-3">
        Le total de morveux est de : {contaminated}
      </h2>
      <form>
        <div className="form-group text-left">
          <SearchSchool
            passedId="school-choice"
            handleChangeSchool={handleChangeSchool}
            schools={schools}
          />
        </div>
        {/* <div className="form-check"></div> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Recherchez
        </button>
      </form>
    </div>
  );
}

export default App;
