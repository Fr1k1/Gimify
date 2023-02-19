import React from 'react'
import "./ProgramName.scss";

const ProgramName = (props) => {
  return (
    <div id="name_div">

    <h1>{props.name}</h1>
  </div>
  )
}

export default ProgramName