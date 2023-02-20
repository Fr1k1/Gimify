import React from 'react'
import { useParams } from 'react-router-dom';
import List from '../List/List';
import ProgramInfo from '../ProgramInfo/ProgramInfo';
import ProgramName from '../ProgramName/ProgramName';
import SliderComponent from '../Slider/Slider';
import "./ProgramDetails.scss";

const ProgramDetails = ({ programDetails }) => {

  let { name } = useParams()
  return (
    <div id="program_info">

      {programDetails.filter((program) => program.name === name)
        .map((program, index) => (

          <div key={index}>


            <ProgramName name={program.name} /> {/*ovo funkcionira*/}

            <SliderComponent dataSource={program.slider_images} />

            <ProgramInfo description={program.opis} items={program.list_items} />
          </div>

        )

        )

      }

    </div>
  )
}

export default ProgramDetails