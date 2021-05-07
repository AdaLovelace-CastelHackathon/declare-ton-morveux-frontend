import { useState } from "react";
import { register, login, isAuthenticated } from "../service/authentication";

import FormAuthenticate from "./FormAuthenticate";

function AuthenticatePage({ setHasDeclared, hasDeclared, setIsAuth }) {
  const [signinState, setSigninState] = useState({
    signinUsername: "",
    signinPassword: "",
  });

  const [loginState, setLoginState] = useState({
    loginUsername: "",
    loginPassword: "",
  });

  const handleChangeSignin = (e) => {
    const { id, value } = e.target;
    setSigninState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    const { id, value } = e.target;
    setLoginState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    const { signinUsername, signinPassword } = signinState;
    register(signinUsername, signinPassword)
      .then(
        (response) => {
          // console.log(`You are connected with token : ${response.token}`);
          console.log(response);
        },
        () => console.log("already taken")
      )
      .catch((error) => alert(`Sorry, there was an error`));
    isAuthenticated().then((response) => {
      setIsAuth(response.data);
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { loginUsername, loginPassword } = loginState;
    login(loginUsername, loginPassword)
      .then((token) => {
        // console.log(`You are connected with token : ${token}`);
        isAuthenticated().then((response) => {
          setIsAuth(response.data);
        });
      })
      .catch((error) => {
        alert(`Sorry, there was an error`);
        console.log(error);
      });
  };

  const signSpec = {
    header: "Créer un compte",
    userId: Object.keys(signinState)[0],
    state: signinState,
    passId: Object.keys(signinState)[1],
    btnValue: "Créer un compte",
  };

  const logSpec = {
    header: "Se connecter",
    userId: Object.keys(loginState)[0],
    state: loginState,
    passId: Object.keys(loginState)[1],
    btnValue: "Se connecter",
  };

  return (
    <div className="container-fluid">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setHasDeclared(!hasDeclared)}
      >
        Retour
      </button>
      <div className="row">
        <div className="col-sm-6">
          <FormAuthenticate
            spec={signSpec}
            handleChange={handleChangeSignin}
            handleSubmit={handleSubmitSignin}
          />
        </div>
        <div className="col-sm-6">
          <FormAuthenticate
            spec={logSpec}
            handleChange={handleChangeLogin}
            handleSubmit={handleSubmitLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default AuthenticatePage;
