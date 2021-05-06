import MenuHome from "./components/MenuHome";
import AuthenticatePage from "./components/AuthenticatePage";
import SearchSchool from "./components/SearchSchool";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [hasDeclared, setHasDeclared] = useState(false);

  if (!hasDeclared) {
    return <AuthenticatePage setHasDeclared={setHasDeclared} />;
  }

  return (
    <div className="contaier-fluid">
      <MenuHome />
      <h1 className="text-center mb-3">Déclare ton Morveux</h1>
      <SearchSchool />
    </div>
  );
}

export default App;
