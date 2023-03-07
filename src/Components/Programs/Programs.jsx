import React from 'react'
import "./Programs.scss";
import { programsData } from "../../Data/Programs_data";
import Program from '../Program/Program';


const Programs = () => {
    return (
        <div id='programs_div' >

            <div id="categories">
                {programsData.map((program, i) => (    
                    <Program icon={program.icon} program_name={program.program_name} description={program.description} key={i} />
                ))}
            </div>

        </div>
    )
}

export default Programs