import React from "react";

const List = (props) => {
  const items = props.items.map((item, index) => <li key={index}>{item}</li>);

  return <ul>{items}</ul>;
};

export default List;
