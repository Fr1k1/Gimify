import React from "react";
import List from "../List/List";
import "./ProgramInfo.scss";

const ProgramInfo = (props) => {
  return (
    <div>
      <h3>Pogodnosti programa:</h3>

      <List items={props.items} />

      <h3>Dodatan opis</h3>

      <p>{props.description}</p>

      <p>{props.price}</p>
    </div>
  );
};

export default ProgramInfo;
