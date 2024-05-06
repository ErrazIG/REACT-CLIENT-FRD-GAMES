import { useState } from "react";
import style from "./registerPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const logoUsernameInputClasses = `${style.formChildren} ${style.formUsernameChildren}`;
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const data = { username, email, confirmEmail, password, confirmPassword };

    axios
      .post("auth/register", data, {
        baseURL: "http://localhost:8080/api/",
      })
      .then((response) => {
        // console.log(response.data);
        setMessage("Register success! Redirecting to login page...");
        console.log("LA RESPONSE : ", response);

          if (response.status === 201) {
            return <Navigate to="/auth/login" />;
          }

      })
      .catch((error) => {
        console.log(error);
        setMessage(`Register failed!`);
      });
  };

  return (
    <>
      <form className={style.registerForm} onSubmit={handleRegisterSubmit}>
        <h1 className={style.tilteForm}>Register</h1>

        <div className={logoUsernameInputClasses}>
          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor="username">
              Username:
            </label>
            <input
              className={style.inputInput}
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className={style.formChildren}>
          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor="email">
              Email:
            </label>
            <input
              className={style.inputInput}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor="confirmEmail">
              Confirm Email:
            </label>
            <input
              className={style.inputInput}
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={style.formChildren}>
          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor="password">
              Password:
            </label>
            <input
              className={style.inputInput}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className={style.inputInput}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className={style.authBtnRegister} type="submit">
            Register
          </button>
          {message && (
            <p className={style.messageSuccessError} id="message-container">
              {message}
            </p>
          )}
        </div>
        <span className={style.loginText}>
          Already have an account ?{" "}
          <Link className={style.loginBtn} to="/auth/login">
            Login
          </Link>
        </span>
      </form>
    </>
  );
};
export default RegisterPage;
