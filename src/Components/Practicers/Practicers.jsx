import React from "react";
import "./Practicers.scss";
import Exerciser1 from "../../assets/Exerciser.png";
import Exerciser2 from "../../assets/Exerciser_2.png";

const Practicers = () => {
  return (
    <div id="main_practicers_div">
      <img src={Exerciser1} alt="" id="exerciser1" />
      <img src={Exerciser2} alt="" id="exerciser2" />
    </div>
  );
};

export default Practicers;
