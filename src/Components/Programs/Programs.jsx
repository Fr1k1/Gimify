import React from 'react'
import "./Programs.scss";
import { programsData } from "../../Data/Programs_data";
import Program from '../Program/Program';


const Programs = () => {
    return (
        <div id='programs_div' >

            <div id="categories">
                {programsData.map((program, i) => (     /*ovak trebam napraviti i za detalje bas*/
                    <Program ikona={program.ikona} naslov={program.naslov} opis={program.opis} />
                ))}
            </div>

        </div>
    )
}

export default Programs