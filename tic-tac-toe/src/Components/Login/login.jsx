import React, { useState, useEffect } from "react";
import { login, getUser } from "../../utils/api";
import "./login.css";
function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    // player2: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // const [player2, setPlayer2] = useState("");
  const onChange =
    (stateKey) =>
    ({ target }) =>
      setLoginData({ ...loginData, [stateKey]: target.value });

  //

  const onSubmit = (event) => {
    event.preventDefault();
    login(loginData)
      .then((data) => {
        if (!data.error.length) {
          window.localStorage.setItem("access_token", data.access_token);
          setUser(data);
          setIsLoggedIn(true);
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  };
  //

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    //router can solve this
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser({});
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div className="bigone">
      <div className="GameTitle">
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="logintitle">
        <h1 className="title"> log-in</h1>
      </div>
      <div className="login">
        <form onSubmit={login}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            className="username"
            placeholder="e.g. Mohammad123"
            onChange={onChange("username")}
            value={loginData.username}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
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
