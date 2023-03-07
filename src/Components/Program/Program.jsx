import "./Program.scss";
import { Link } from "react-router-dom";


const Program = ({ icon, program_name, description }) => {

    return (<div className="program">
        <span>{icon}</span>
        <span className='program_name' >{program_name}</span>
        <span className='program_description' >{description}</span>

        <div id='button_div'>

            <Link to={"/program/" + program_name}>

                <button className='find_more_btn' >Saznajte više</button>
            </Link>
        </div>
    </div>)

}

export default Program