import "./Program.scss";
import { Link } from "react-router-dom";


const Program = ({ ikona, naslov, opis }) => {

    return (<div className="program">
        <span>{ikona}</span>
        <span className='program_name' >{naslov}</span>
        <span className='program_description' >{opis}</span>

        <div id='button_div'>

            <Link to={"/program/" + naslov}>

                <button className='find_more_btn' >Saznajte više</button>
            </Link>
        </div>
    </div>)

}

export default Program