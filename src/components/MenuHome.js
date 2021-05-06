import { isAuthenticated } from "../service/authentication";

function MenuHome({ hasDeclared, setHasDeclared, setIsAuth }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">DtM Logo</span>
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => setHasDeclared(!hasDeclared)}
          >
            Déclarez un enfant
          </button>
          <button
            className="btn btn-outline-warning"
            type="submit"
            onClick={() =>
              isAuthenticated().then((response) => setIsAuth(response.data))
            }
          >
            Se déconnecter
          </button>
        </div>
      </nav>
    </>
  );
}

export default MenuHome;
