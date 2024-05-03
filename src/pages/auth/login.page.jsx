import axios from "axios";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import style from "./loginPage.module.css";

const LoginPage = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const data = { username, password };

    // Requete AJAX vers l'API
    axios
      .post("auth/login", data, {
        baseURL: "http://localhost:8080/api/",
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <form className={style.loginForm} onSubmit={handleLoginSubmit}>
        <h1 className={style.tilteForm}>Login</h1>
        <div className={style.inputContainer}>
          <label className={style.inputLabel} htmlFor="username">Username:</label>
          <input className={style.inputInput}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.inputLabel} htmlFor="password">Password:</label>
          <input className={style.inputInput}
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className={style.authBtnLogin} type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
