import React, { useEffect, useState } from "react";
import Board from "./MainBoard";
import Refresh from "./Refresh1";
import Message from "./Message1";
import "./MainGame.css";
//list of winning outcomes
const won = (board) => {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];
  //this loop goes through the combos on each click, checking if a certain box is not empty, if it complements the second and third boxes (a winning line)
  for (let i = 0; i < combos.length; i++) {
    let [a, b, c] = combos[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  //returning false means the game continues
  return false;
};

function MainGame() {
  //sets the board to 9 empty boxes
  const [board, setBoard] = useState(Array(9).fill(""));
  //default player starts as x
  const [theme, setTheme] = useState([
    { img: "/X.png", name: "X" },
    { img: "/O.png", name: "O" },
  ]);

  const [defaultPlayer, setDefaultPlayer] = useState(theme[0]);
  //this changes according to the clicks in the game. It'll either be press any box to start OR whose turn it is
  const [message, setMessage] = useState("Press any box to start");
  // /mario /shireen
  // /x /o
  //the function that resets the boxes to empty boxes and restarts the initial message, also reverts the default player to X
  function refreshGame() {
    setBoard(Array(9).fill(""));
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

  return (
    <div>
      <Refresh onClick={refreshGame} value={"Refresh"} />
      <Message value={message} />
      <Board onClick={handleInput} value={board} />
      <h3 className="ThemeName">Themes</h3>
      <div className="Themes">
        <div className="divider"></div>
        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/marioface.png", name: "Mario" },

              { img: "/shireen.png", name: "Shireen" },
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
              { img: "/fadi.png", name: "Fadi" },
              { img: "/hassona.png", name: "Hassona" },
            ]);
            // setDefaultPlayer({ img: "/fadi.jpg", name: "Fadi" });
          }}
        >
          Fadi/Hassona
        </button>
        <button
          className="f"
          onClick={(props) => {
            setTheme([
              { img: "/X.png", name: "X" },
              { img: "/O.png", name: "O" },
            ]);

            // setDefaultPlayer({ img: "/fadi.jpg", name: "Fadi" });
          }}
        >
          X/O
        </button>
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default MainGame;
