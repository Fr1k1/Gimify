import React from 'react'
import "./StrengthProgram.scss";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import StrengthPic from "../../../assets/strength_training.jpg";
import StrengthPic2 from "../../../assets/strength_training2.jpg";

const slides = [      //ove podatke postavi u posebni file u mapu data za bolji kod
  {
    title: 'First item', description: 'Lorem ipsum',
    image: StrengthPic
  },
  {
    title: 'Second item', description: 'Lorem ipsum',
    image: StrengthPic2
  }
];





const Strength_program = () => {
  return (
    <div id='strength_program_main'>

      <div id='slider'>


        <Slider>
          {slides.map((slide, index) =>
            <div
              key={index}>
             {/*<h2>{slide.title}</h2>*/} 
              <img src={slide.image} alt="" />

            </div>)}
        </Slider>

      </div>
    </div>
  )
}

export default Strength_program