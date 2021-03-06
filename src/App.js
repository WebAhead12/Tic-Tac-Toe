import React, { useEffect } from "react";
import Login from "./Components/Login/login";
import RegisterPage from "./Components/Register/register";
import "./App.css";
import Game from "./Components/Game/MainGame";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {link}

const App = () => {
  useEffect(() => {
    document.title = "tic-tac-toe";
  }, []);
  return (
    <BrowserRouter>
      {/* Routes makes sure that only one path opens at a time */}

      <Routes>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<RegisterPage />} />

        {/* the "exact" makes the path match only "/" and not also "/user/login" */}
        <Route exact path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
