import React from "react";
import Box from "./Box";
import style from "./MainBoard.css";

//this function positions each square and locates it on the board
function Board(props) {
  return (
    <div className="boardPos" style={style}>
      {[...Array(16)].map((_, pos) => (
        <Box
          key={pos}
          name={pos}
          onClick={() => props.onClick(pos)}
          value={props.value[pos]}
        />
      ))}
    </div>
  );
}

export default Board;
