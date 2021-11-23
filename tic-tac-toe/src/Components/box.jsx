import React from "react";

const style = {
  border: "3px solid black",
  //makes X's and O's bigger
  fontSize: "70px"
}
//this function builds the buttons that are the squares and reveals their value when clicked on
function Box(props) {
  return <button name={props.name} style={style} onClick={props.onClick} > {props.value} </button >
}

export default Box;