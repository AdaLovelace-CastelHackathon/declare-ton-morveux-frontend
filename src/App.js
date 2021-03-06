import MenuHome from "./components/MenuHome";
import AuthenticatePage from "./components/AuthenticatePage";
import SearchSchool from "./components/SearchSchool";
import PageDeclare from "./components/PageDeclare";

import { useEffect, useState } from "react";

import { isAuthenticated } from "./service/authentication";
import { getSchoolList, getSchoolsInfo } from "./service/school";
// import { allSnottyBrat } from "./service/snottyBrat";
import axios from "axios";

import { getMyInfo } from "./service/parent";
import { getMyBrats } from "./service/snottyBrat";

function App() {
  const [hasDeclared, setHasDeclared] = useState(false);
  const [contaminated, setContaminated] = useState(0);
  const [schools, setSchools] = useState([]);
  const [school, setSchool] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState();
  const [myBrats, setMyBrats] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const schoolObj = schools.find((e) => e.name.includes(school));
    schoolObj &&
      getSchoolsInfo(schoolObj.id).then((response) =>
        setSchoolInfo(response.data)
      );
  };

  const updateBrats = () => {
    getMyInfo().then((response) =>
      getMyBrats(response.data.id).then((response) => {
        setMyBrats(response.data);
      })
    );
  };

  useEffect(() => {
    updateBrats();
    isAuthenticated().then((response) => setIsAuth(response.data));

    getSchoolList().then((response) => setSchools(response.data));
    // allSnottyBrat().then((response) => setContaminated(response.data.sick));
    const fetchData = async () => {
      const allSnots = await axios
        .get("https://declare-ton-morveux.herokuapp.com/api/children/sick")
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      setContaminated(allSnots);
    };
    fetchData();
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
        updateBrats={updateBrats}
        setHasDeclared={setHasDeclared}
        hasDeclared={hasDeclared}
        schools={schools}
        myBrats={myBrats}
        isLoaded={isLoaded}
      />
    );
  }

  return (
    <div className="container-fluid">
      <MenuHome
        setHasDeclared={setHasDeclared}
        setIsAuth={setIsAuth}
        isAuth={isAuth}
      />
      <h1 className="text-center mb-3">
        Bienvenue sur <br /> D??clare ton Morveux
      </h1>
      <h2 className="text-center mb-3">
        Le total de morveux est de : {contaminated.sick}
      </h2>
      <h3 className="text-center mb-3">
        Le total de morveux <b>contagieux</b> est de : {contaminated.contagious}
      </h3>
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
      {schoolInfo &&
        (schoolInfo.children.length > 0 ? (
          <div className="mt-3 pt-3 border-top border-2">
            <p>
              Liste de morveux inscrit ?? l'{schoolInfo.name}
              <br />
              <small>
                Vous pouvez les pointer du doigt et criez "
                <b>Ah ! Les p'tits morveux !</b>"
              </small>
            </p>

            <ul>
              {schoolInfo.children.map((e, i) => (
                <li key={i}>
                  {e.firstName} {e.lastName}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-3 pt-3 border-top border-2">
            <p>Il n'y a pas de morveux ?? {schoolInfo.name}.</p>
          </div>
        ))}
    </div>
  );
}

export default App;
