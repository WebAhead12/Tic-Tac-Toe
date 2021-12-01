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
  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    //router can solve this
    if (token) {
      setUser(token)
        .then((data) => {
          setUser(data);
          setIsRegistered(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="username"
        name="username"
        placeholder="e.g. Mohammad123"
        onChange={onChange("username")}
        value={account.username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="password"
        placeholder="Password..."
        onChange={onChange("password")}
        value={account.password}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        className="ConfirmPassword"
        placeholder="Confirm password..."
        onChange={onChange("confirmPassword")}
        value={account.confirmPassword}
      />
      <button type="register">Register</button>
      return ( )
    </form>
  );
}
export default RegisterPage;
