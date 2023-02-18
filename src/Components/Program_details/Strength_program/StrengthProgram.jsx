import React from 'react'
import "./StrengthProgram.scss";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import StrengthPic from "../../../assets/strength_training.jpg";
import StrengthPic2 from "../../../assets/strength_training2.jpg";
import StrengthPic3 from "../../../assets/strength_training3.jpg";


const slides = [      //ove podatke postavi u posebni file u mapu data za bolji kod
  {
    title: 'First item', description: 'Lorem ipsum',
    image: StrengthPic
  },
  {
    title: 'Second item', description: 'Lorem ipsum',
    image: StrengthPic2
  },

  {
    title: 'First item', description: 'Lorem ipsum',
    image: StrengthPic3
  },
];


const Strength_program = () => {
  return (
    <div id='strength_program_main'>

      <div id="name_div">

        <h1>Program snage</h1>
      </div>

      <div id='slider'> {/*ovo izdvojiti u posebnu komponentu*/}


        <Slider infinite={true} autoplay={2000}>
          {slides.map((slide, index) =>
            <div
              key={index}>
              {/*<h2>{slide.title}</h2>*/}
              <img src={slide.image} alt="" className='slider_image' />

            </div>)}
        </Slider>

      </div>


      <div id="program_info">

        <h3>Pogodnosti programa:</h3>
        <br />

        <ul>
          <li>Prva</li>
          <li>Druga</li>
          <li>Treca</li>

        </ul>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis, deserunt autem esse provident quam hic nostrum natus officia eius veritatis tenetur at facilis voluptatum quasi excepturi et voluptate eveniet?</p>

      </div>
    </div>
  )
}

export default Strength_program