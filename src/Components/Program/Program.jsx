import "./Program.scss";
import { Link } from "react-router-dom";


const Program = ({ icon, naslov, description }) => {

    return (<div className="program">
        <span>{icon}</span>
        <span className='program_name' >{naslov}</span>
        <span className='program_description' >{description}</span>

        <div id='button_div'>

            <Link to={"/program/" + naslov}>

                <button className='find_more_btn' >Saznajte više</button>
            </Link>
        </div>
    </div>)

}

export default Program