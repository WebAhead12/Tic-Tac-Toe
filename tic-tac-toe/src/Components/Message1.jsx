import React from "react";
const style = {
  textAlign: "center",
  backgroundColor: "#FBB040",
  width: "40%",
  height: "45px",
  marginLeft: "30%",
};
function Message(props) {
  return <h3 style={style}>{props.value}</h3>;
}

export default Message;
