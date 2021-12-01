import React, { useState, useEffect } from "react";
import { register } from "../../utils/api";
import "./register.css";
function RegisterPage() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    // player2: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState({});
  // const [player2, setPlayer2] = useState("");
  const onChange =
    (stateKey) =>
    ({ target }) =>
      setIsRegistered({ ...account, [stateKey]: target.value });

  //
  const onSubmit = (event) => {
    event.preventDefault();
    // add if name/password/confirmPassword === "" to bring up an alert
    register(account).then((data) => {
      window.localStorage.setItem("access_token", data.access_token);
      setUser(data);
      setIsRegistered(true);
      console.log(data.error);
    });
  };

  //change to register
  // register(account).then (result) => if (result.response === "successful") then redirect to login page <Link to="./Login/login">Register</link>

  return (
    <div className="bigone">
      <div className="GameTitle">
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="logintitle">
        <h1 className="title"> Register</h1>
      </div>
      <div className="login">
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            className="username"
            name="username"
            placeholder="e.g. Mohammad123"
            onChange={onChange("username")}
            value={RegisterPage.username}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            className="password"
            placeholder="Password..."
            onChange={onChange("password")}
            value={RegisterPage.password}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            className="ConfirmPassword"
            placeholder="Confirm password..."
            onChange={onChange("confirmPassword")}
            value={RegisterPage.confirmPassword}
          />
          <br />
          <br />
          <br />
          <button type="register" className="register">
            <a href="/users/login">Register</a>
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
