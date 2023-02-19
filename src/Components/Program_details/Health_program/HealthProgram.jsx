import React from 'react'
import { HealthProgramListData } from '../../../Data/Lists_data';
import { HealthProgramSliderData } from '../../../Data/Sliders_data';
import ProgramInfo from '../../ProgramInfo/ProgramInfo';
import ProgramName from '../../ProgramName/ProgramName';
import SliderComponent from '../../Slider/Slider';
import "./HealthProgram.scss";

const HealthProgram = () => {
    return (
        <div>

            <ProgramName name="Trening za zdravlje" />
            <SliderComponent dataSource={HealthProgramSliderData} />

            <ProgramInfo description="Ovaj program namijenjen je za ljude koji žele steći kondiciju i za one
         koji ne mogu trčati."

                items={HealthProgramListData}

            /*dodaj description i name isto u neka polja onda */
            />
        </div>
    )
}

export default HealthProgram