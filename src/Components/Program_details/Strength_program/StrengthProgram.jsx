import React from 'react'
import "./StrengthProgram.scss";

import 'react-animated-slider/build/horizontal.css';
import SliderComponent from '../../Slider/Slider';
import {StrengthProgramSliderData } from '../../../Data/Sliders_data';
import ProgramName from '../../ProgramName/ProgramName';
import ProgramInfo from '../../ProgramInfo/ProgramInfo';
import { StrengthProgramListData } from '../../../Data/Lists_data';

const Strength_program = () => {
  return (
    <div id='strength_program_main'>

      <ProgramName name="Trening snage" />

      <SliderComponent dataSource={StrengthProgramSliderData} /> 

      <ProgramInfo description="Ovaj program namijenjen je za ljude koji žele brzo ojačati i izgledati što bolje
                za što kraće vrijeme obzirom da se uz pravilnu prehranu i pravilno treniranje može lako
                upravljati nečijom masom."

        items={StrengthProgramListData}
      />
    </div>
  )
}

export default Strength_program