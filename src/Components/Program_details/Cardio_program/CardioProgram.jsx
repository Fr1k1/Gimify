import React from 'react'
import { CardioProgramListData } from '../../../Data/Lists_data';
import { CardioProgramSliderData } from '../../../Data/Sliders_data';
import ProgramInfo from '../../ProgramInfo/ProgramInfo';
import ProgramName from '../../ProgramName/ProgramName';
import SliderComponent from '../../Slider/Slider';
import "./CardioProgram.scss";



const CardioProgram = () => {
    return (
        <div>

            <ProgramName name="Kardio trening" />
            <SliderComponent dataSource={CardioProgramSliderData} />

            <ProgramInfo description="Ovaj program namijenjen je za ljude koji žele steći kondiciju i za one
         koji ne mogu trčati."

                items={CardioProgramListData}

                /*dodaj description i name isto u neka polja onda */
            />
        </div>
    )
}

export default CardioProgram