import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import ProgramInfo from '../ProgramInfo/ProgramInfo';
import ProgramName from '../ProgramName/ProgramName';
import SliderComponent from '../Slider/Slider';
import "./ProgramDetails.scss";

const ProgramDetails = ({ programDetails }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let { name } = useParams()
  return (
    <div >

      {programDetails.filter((program) => program.name === name)
        .map((program, index) => (

          <div key={index} id="details_main">


            <ProgramName name={program.name} /> 

            <SliderComponent dataSource={program.slider_images} />

            <div id="program_info">

            <ProgramInfo description={program.description} items={program.list_items} />

            </div>

            <Footer/>
          </div>

        )

        )

      }

    </div>
  )
}

export default ProgramDetails