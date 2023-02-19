import React from 'react'
import "./Partners.scss";
import NikeLogo from "../../assets/Nike_logo.png";
import AdidasLogo from "../../assets/Adidas_logo.png";
import GymSharkLogo from "../../assets/Gymshark_logo.png";
import PolleoSportLogo from "../../assets/PolleoSport_logo.png";


const Partners = () => {
    return (
        <div id='main_div'>

          {/*  <h3 className='partners_text'>Naši partneri:</h3>*/}

            <div className='partner_images'>
                <img src={NikeLogo} alt="" className='nike_logo' />
                <img src={AdidasLogo} alt="" className='adidas_logo' />
                <img src={GymSharkLogo} alt="" className='gymshark_logo' />
                <img src={PolleoSportLogo} alt="" className='polleosport_logo' />
            </div>
        </div>
    )
}

export default Partners