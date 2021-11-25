import React from "react";
const style = {
  textAlign: "center",
  backgroundColor: "#FBB040",
  width: "50%",
  height: "auto",
  marginLeft: "24%",
  padding: "1%",
  fontSize: "1.2em",
  display: "flex",
  justifyContent: "center",
  marginTop: "-50px",
};
function Message(props) {
  return <h3 style={style}>{props.value}</h3>;
}

export default Message;
