import React from "react";

const style = {
  alignItems: "left",
  justifyContent: "left",
  float: "top",
  borderRadius: 4,
  elevation: 3,
  backgroundColor: "white",
  cursor: "pointer",
  margin: "0, auto",
  border: " 4px solid #fbb040",
  fontSize: "20px",
  lineHeight: 2,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "black",
  // marginTop: "-px",
};

function Refresh(props) {
  return (
    <button name={"button"} onClick={props.onClick} style={style}>
      {" "}
      {props.value}
    </button>
  );
}

export default Refresh;
