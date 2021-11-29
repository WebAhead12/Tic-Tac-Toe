import React from "react";
import "./Box.css";
//this function builds the buttons that are the squares and reveals their value when clicked on
function Box(props) {
  //if there's no image, don't return an empty box
  if (props.value === "") {
    return <div className="boxStyle" onClick={props.onClick}></div>;
  }
  return (
    <img name={props.name} src={props.value} onClick={props.onClick} alt={""} />
  );
}

export default Box;
