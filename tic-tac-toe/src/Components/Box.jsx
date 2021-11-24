import React from "react";
const style = {
  border: "3px solid white",
  //makes X's and O's bigger
  //change to px to vh
  width: "24vw",
  height: "23vw",
};
//this function builds the buttons that are the squares and reveals their value when clicked on
function Box(props) {
  //if there's no image, don't return an empty box
  if (props.value === "") {
    return <div style={style} onClick={props.onClick}></div>;
  }
  return (
    <img
      name={props.name}
      style={style}
      src={props.value}
      onClick={props.onClick}
      alt={""}
    />
  );
}

export default Box;
