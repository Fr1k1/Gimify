import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ProgramInfo from '../ProgramInfo/ProgramInfo';
import ProgramName from '../ProgramName/ProgramName';
import SliderComponent from '../Slider/Slider';
import "./ProgramDetails.scss";

const ProgramDetails = ({ programDetails }) => {

  let { name } = useParams()
  return (
    <div >

      {programDetails.filter((program) => program.name === name)
        .map((program, index) => (

          <div key={index}>


            <ProgramName name={program.name} /> 

            <SliderComponent dataSource={program.slider_images} />

            <div id="program_info">

            <ProgramInfo description={program.opis} items={program.list_items} />

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