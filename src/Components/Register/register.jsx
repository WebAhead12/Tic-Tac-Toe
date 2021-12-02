import React, { useState } from "react";
import { register } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./register.css";

function RegisterPage() {
  const history = useNavigate();
  const [account, setAccount] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange =
    (stateKey) =>
    ({ target }) => {
      setAccount({ ...account, [stateKey]: target.value });
    };

  //
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(1234);
    if (account.password !== account.confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      register(account) //trick prettier
        .then((res) => {
          if (res.response === "Successful") {
            alert(
              `Welcome, ${account.fullName}. Your account has been created successfully`
            );
            history("/users/login");
          } else {
            alert(res.error);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="bigoneRegister">
      <div className="GameTitle">
        <p>Tic-Tac-Toe</p>
      </div>
      <div className="registertitle">
        <h1 className="title"> Register</h1>
      </div>
      <div className="register">
        <form onSubmit={onSubmit}>
          <br />
          <label className="nameTitle" htmlFor="fullName">
            Name
          </label>
          <br />
          <input
            type="text"
            className="fullName"
            name="fullName"
            placeholder="e.g. Jon Snow"
            onChange={onChange("fullName")}
            value={RegisterPage.fullName}
            required
          />
          <br />
          <br />
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            className="username"
            name="username"
            placeholder="e.g. iKnowNothing1"
            onChange={onChange("username")}
            value={RegisterPage.username}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />

          <input
            type="password"
            name="password"
            className="password"
            placeholder="Password..."
            onChange={onChange("password")}
            value={RegisterPage.password}
            required
          />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            className="ConfirmPassword"
            name="ConfirmPassword"
            placeholder="Confirm password..."
            onChange={onChange("confirmPassword")}
            value={RegisterPage.confirmPassword}
            required
          />
          <br />
          <br />
          <br />
          <button type="submit" className="btnRegister">
            Register
          </button>
          <a href="/users/login">
            <button type="button" className="backToLogin">
              Back to Login
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
