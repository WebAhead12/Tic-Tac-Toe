import React from "react";
import Box from "./box";

const style = {
  width: "90%",
  height: "500px",
  margin: "0 auto",
  display: "grid",
  //this style thing adjusts the sizing between the squares
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  padding: '4%',
};
//this function positions each square and locates it on the board
function Board(props) {
  return <div className="boardPos" style={style}>
    {[...Array(9)].map((_, pos) => <Box key={pos} name={pos} onClick={() => props.onClick(pos)} value={props.value[pos]} />)}
  </div>
}

export default Board;