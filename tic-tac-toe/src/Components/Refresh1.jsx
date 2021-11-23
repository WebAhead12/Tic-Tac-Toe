import React from "react";

const style = {

  alignItems: 'left',
  justifyContent: 'left',
  float: 'top',
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'white',
  marginTop: '3%',
  marginLeft: '3%',

  fontSize: 16,
  lineHeight: 2,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'black',
}

function Refresh(props) {
  return <button name={"button"} onClick={props.onClick} style={style}> {props.value}</button>
}

export default Refresh