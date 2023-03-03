import React from 'react'
import Header from '../Header/Header';
import "./Exerciser.scss";
import MainExerciser from "../../assets/main.png";
import RectangleDark from "../../assets/Rectangle2_dark.png";
import RectangleLight from "../../assets/Rectangle2.png";


const Exerciser = () => {
  return (
    <div id="main">


      <Header />

      <div className="main_text">

        <div>
          <span className='transparent_text'>LAVE</span> <br />
          <span className='other_text'>USTANI, <br /> ZAPNI <br /> I KRENI</span>
        </div>
      </div>


      <div className="right-side">

        <img src={MainExerciser} alt="" className='main_exerciser_pic' />
        <img src={RectangleDark} alt="" className='rectangle_dark' />
        <img src={RectangleLight} alt="" className='rectangle_light' />

      </div>
    </div>
  )
}

export default Exerciser