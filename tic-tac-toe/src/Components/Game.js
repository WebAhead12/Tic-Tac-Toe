import React from "react"
import Board from "./board"
//don't want to use this yet
// import Refresh from './refresh'

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

  ]
  for (let i = 0; i < combos.length; i++) {
    let [a, b, c] = combos[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }

  }

}

export default Game;
