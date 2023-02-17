import React from 'react'
import "./Gallery.scss";
import Extension_pic from "../../assets/extension_gym.jpg";
import Dude_pic from "../../assets/dude_pic.jpg";
import girl from "../../assets/girl.jpg";
import BarbellsPic from "../../assets/barbells_pic_gym.jpg";
import GymPeople from "../../assets/gym_people_pic.jpg";
import GymRunners from "../../assets/gym_running_pic.jpg";


const Gallery = () => {
  return (
    <div id="gallery_main">

      <div className='row'>
        <img src={Extension_pic} alt="" id='ext_pic' className='col' />
        <img src={GymPeople} alt="" id='people_pic' className='col' />
      </div>

      <div className='row'>
        <img src={GymRunners} alt="" id='runners_pic' className='col' />

      </div>

      <div className='row'>
        <img src={Dude_pic} alt="" id='dude_pic' className='col' />
        <img src={BarbellsPic} alt="" id='barbells_pic' className='col' />
        <img src={girl} alt="" id='girl_pic' className='col' />

      </div>
      {/*  
      */}
    </div>
  )
}

export default Gallery