import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Slider.scss";

const SliderComponent = (props) => {
  return (
    <div id="slider">
      <Slider infinite={true} autoplay={2000}>
        {props.dataSource.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" className="slider_image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
