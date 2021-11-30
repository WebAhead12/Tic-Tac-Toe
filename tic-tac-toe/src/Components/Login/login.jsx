import React, { useState, useEffect } from "react";
import { login, getUser } from "../../utils/api";
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
    login(loginData).then((data) => {
      window.localStorage.setItem("access_token", data.access_token);
      setUser(data);
      setIsLoggedIn(true);

      console.log(data.error);
    });
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
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="username"
        name="username"
        placeholder="e.g. Mohammad123"
        onChange={onChange("user.name")}
        value={loginData.username}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="password"
        placeholder="Password..."
        onChange={onChange("password")}
        value={loginData.password}
        required
      />
      <button type="log-in">Log in</button>
      return ( )
    </form>
  );
}
export default LoginPage;
