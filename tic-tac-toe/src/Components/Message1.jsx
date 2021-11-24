import React from "react";
const style = {
  textAlign: "center",
  backgroundColor: "#FBB040",
  width: "40%",
  height: "auto",
  marginLeft: "27%",
  padding: "4%",
  fontSize: "3vh",
  display: "flex",
  justifyContent: "center",
};
function Message(props) {
  return <h3 style={style}>{props.value}</h3>;
}

export default Message;
