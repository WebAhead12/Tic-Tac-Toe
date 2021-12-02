import React, { useEffect, useState } from "react";
import Board from "./MainBoard";
import Refresh from "./Refresh1";
import Message from "./Message1";
import { useNavigate, Link } from "react-router-dom";
import "./MainGame.css";
import { getUser } from "../../utils/api";

// import LoginPage from "../Login/login";

//list of winning outcomes
const won = (board) => {
  const combos = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],

    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],

    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  //this loop goes through the combos on each click, checking if a certain box is not empty, if it complements the second and third boxes (a winning line)
  for (let i = 0; i < combos.length; i++) {
    let [a, b, c, d] = combos[i];
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return true;
    }
  }

  //returning false means the game continues
  return false;
};

function MainGame() {
  const history = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    //router can solve this
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      history("/users/login");
    }
  }, []);

  //sets the board to 9 empty boxes
  const [board, setBoard] = useState(Array(9).fill(""));
  //default player starts as x
  const [theme, setTheme] = useState([
    { img: "/X.png", name: "X" },
    { img: "/O.png", name: "Player-2" },
  ]);

  // const [username, setUsername] = useState("");

  const [defaultPlayer, setDefaultPlayer] = useState(theme[0]);
  //this changes according to the clicks in the game. It'll either be press any box to start OR whose turn it is
  const [message, setMessage] = useState("Press any box to start");
  // /mario /shireen
  // /x /o
  //the function that resets the boxes to empty boxes and restarts the initial message, also reverts the default player to X
  function refreshGame() {
    setBoard(Array(16).fill(""));
    setMessage("Press any box to start");
    setDefaultPlayer(theme[0]);
  }
  useEffect(() => {
    refreshGame();
  }, [theme]);
  //not sure about this one
  //apparently it doesn't allow you to play if the game is over?
  function handleInput(pos) {
    if (defaultPlayer === "" || board[pos] !== "") {
      return;
    }

    //updates the board
    const boardCopy = [...board];
    boardCopy[pos] = defaultPlayer.img;
    setBoard(boardCopy);

    //displays who the winner is
    if (won(boardCopy)) {
      setMessage(`${defaultPlayer.name} WON`);
      setDefaultPlayer("");
      return;
    }

    //in case of a draw: if there are no more moves left (aka -1), it'll call the game a draw. It does this continously through each click, checking if there's a draw, else, the game continues
    if (boardCopy.indexOf("") === -1) {
      setMessage("Draw!");
      setDefaultPlayer("");
    } else {
      // player one will be X, and if it's not player one, they'll play O, else, it reverts back to X
      let nextPlayer = defaultPlayer === theme[0] ? theme[1] : theme[0];
      setDefaultPlayer(nextPlayer);
      setMessage(` ${nextPlayer.name}'s Turn`);
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser({});
    history("/users/login");
  };

  return (
    <div>
      <Refresh onClick={refreshGame} value={"Refresh"} />
      <Link
        to="/users/login"
        state={{ from: "ss" }}
        className="Logout"
        onClick={logout}
      >
        Logout
      </Link>
      <div className="GameTitle">
        <p>Tic-Tac-Toe</p>
      </div>

      <div className="welcomeMessage">
        <p>Welcome, {user.name}!</p>
      </div>

      <Message className="messsage" value={message} />
      <Board onClick={handleInput} value={board} />
      <div className="ThemeName">
        <p>
          <u>Themes</u>
        </p>
        <p>**Changing the theme will restart the game</p>
      </div>
      <div className="Themes">
        {/* <div className="divider"></div> */}

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/X.png", name: `${user.name}` },
              { img: "/O.png", name: "Player Two" },
            ]);
          }}
        >
          X/O
        </button>

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/marioface.png", name: `${user.name}` },

              { img: "/shireen.png", name: "Player Two" },
            ]);
            // setDefaultPlayer({ img: "/marioface.jpg", name: "Mario" });
          }}
        >
          Mario/Shireen
        </button>

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/mohammad.png", name: `${user.name}` },

              { img: "/george.png", name: "Player Two" },
            ]);
            // setDefaultPlayer({ img: "/marioface.jpg", name: "Mario" });
          }}
        >
          Mohammad/George
        </button>

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/hala.png", name: `${user.name}` },

              { img: "/nur.png", name: "Player Two" },
            ]);
            // setDefaultPlayer({ img: "/marioface.jpg", name: "Mario" });
          }}
        >
          Hala/Nur
        </button>

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/julio.png", name: `${user.name}` },

              { img: "/zahi.png", name: "Player Two" },
            ]);
            // setDefaultPlayer({ img: "/marioface.jpg", name: "Mario" });
          }}
        >
          Julio/Zahi
        </button>

        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/fadi.png", name: "Player One" },
              { img: "/hassona.png", name: "Player Two" },
            ]);
            // setDefaultPlayer({ img: "/fadi.jpg", name: "Fadi" });
          }}
        >
          Fadi/Hassona
        </button>

        {/* <div className="divider"></div> */}
      </div>
    </div>
  );
}

export default MainGame;
