import MenuHome from "./components/MenuHome";
import AuthenticatePage from "./components/AuthenticatePage";
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
      <h1 className="text-center">Déclare ton Morveux</h1>
    </div>
  );
}

export default App;
