import { loggingOut } from "../service/authentication";

function MenuHome({ hasDeclared, setHasDeclared, setIsAuth, isAuth }) {
  const handleLogout = () => {
    loggingOut().then((response) => setIsAuth(response.data));
  };

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
          {isAuth && (
            <button
              className="btn btn-outline-warning"
              type="submit"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default MenuHome;
