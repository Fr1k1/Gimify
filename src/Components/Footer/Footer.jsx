import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from "../../assets/barbell.png";


import "./Footer.scss";
import { Link } from 'react-router-dom';

library.add(faInstagram);


const Footer = () => {
    return (
        <div id='footer_div'>

            <div id="red_line"></div>

            <div id="main_footer">

                <img src={Logo} alt="" id='footer_logo' />

                <h3><Link to='http://localhost:3000/contact' className='text'>Kontaktirajte nas</Link></h3>

                <div id="icons">
                    <FontAwesomeIcon icon={faInstagram} className="ikona" />
                    <FontAwesomeIcon icon={faGithub} className="ikona" />
                    <FontAwesomeIcon icon={faLinkedin} className="ikona" />

                </div>

            </div>
        </div>
    )
}

export default Footer