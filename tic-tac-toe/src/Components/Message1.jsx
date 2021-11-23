import React from "react";
const style = {
  textAlign: 'center'
}

function Message(props) {
  return <h3 style={style}>{props.value}</h3>
}

export default Message