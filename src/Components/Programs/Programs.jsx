import React from 'react'
import "./Programs.scss";
import { programsData } from "../../Programs_data";



//u ovom divu se nalaze programi...program je zasebna komponenta (mozda kasnije)
const Programs = () => {
    return (
        <div id='programs_div' >

            <div id="categories">

                {programsData.map((program, i) => (
                    <div className="program" key={i}>
                        <span>{program.ikona}</span>
                        <span className='program_name' >{program.naslov}</span>
                        <span className='program_description' >{program.opis}</span>

                        <div id='button_div'>

                        <button className='find_more_btn' >Saznajte više</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Programs