import React from "react";
const style = {
  border: "3px solid black",
  //makes X's and O's bigger
  width: '100px',
  height: '100px',
}
//this function builds the buttons that are the squares and reveals their value when clicked on
function Box(props) {
return <img name={props.name} style={style} src={props.value} onClick={props.onClick}/> 
}

export default Box;