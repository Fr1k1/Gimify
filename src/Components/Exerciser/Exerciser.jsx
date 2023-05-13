import React from "react";
import Header from "../Header/Header";
import "./Exerciser.scss";
import MainExerciser from "../../assets/main.png";
import Rectangles from "../../assets/Rectangles.png";

const Exerciser = () => {
  return (
    <div id="main">
      <Header />

      <div className="main_text">
        <div>
          <span className="transparent_text">LAVE</span> <br />
          <span className="other_text">
            USTANI, <br /> ZAPNI <br /> I KRENI
          </span>
        </div>
      </div>

      <div className="right-side">
        <img src={MainExerciser} alt="" className="main_exerciser_pic" />
        <img src={Rectangles} alt="" className="rectangles" />
      </div>
    </div>
  );
};

export default Exerciser;
