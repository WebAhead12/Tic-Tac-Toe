import React, { useState } from "react";
import { login } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginPage(props) {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const onChange =
    (stateKey) =>
    ({ target }) =>
      setLoginData({ ...loginData, [stateKey]: target.value });
  // console.log(props);

  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData)
      .then((data) => {
        if (!data.error.length) {
          window.localStorage.setItem("access_token", data.access_token);
          history("/");
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bigone">
      <div className="GameTitle">
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="logintitle">
        <h1 className="title"> Log-in</h1>
      </div>
      <div className="register">
        <form onSubmit={onSubmit}>
          <label htmlFor="username" className="userLabel">
            Username
          </label>

          <input
            type="text"
            className="username"
            placeholder="e.g. Mohammad123"
            onChange={onChange("username")}
            value={loginData.username}
            required
          />
          <br />
          <br />
          <br />
          <label htmlFor="password" className="passLabel">
            Password
          </label>
          <br />
          <input
            type="password"
            className="password"
            placeholder="Password..."
            onChange={onChange("password")}
            value={loginData.password}
            required
          />
          <br />
          <br />
          <br />
          <button className="btnlog" type="log-in">
            Log in
          </button>
        </form>
      </div>
      <div className="footer">
        <p>
          **if you do not have an account,{" "}
          <a href="/users/register">click me to make one</a>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
