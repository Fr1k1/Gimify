import React from 'react'
import { useEffect, useState } from 'react';
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

    const [marginTop, setMarginValue] = useState('5rem');

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentPage = window.location.href;

        if (currentPage.includes('gallery'))
            setMarginValue('2rem');
        if (currentPage.includes('contact'))
            setMarginValue('-2rem');

    }, [setMarginValue]);


    return (
        <div id='footer_div' style={{ top: marginTop, position: 'relative' }}>

            <div id="red_line"></div>

            <div id="main_footer">

                <img src={Logo} alt="" id='footer_logo' />

                <h3><Link to='/contact' className='text'>Kontaktirajte nas</Link></h3>

                <div id="icons">

                    <a href="https://www.instagram.com/martinfriscic/" rel='noreferrer' target={'_blank'}>   <FontAwesomeIcon icon={faInstagram} className="icon" /> </a>
                    <a href="https://github.com/Fr1k1" rel='noreferrer' target={'_blank'}>  <FontAwesomeIcon icon={faGithub} className="icon" /> </a>
                    <a href="https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-6164ab202/" rel='noreferrer' target={'_blank'}> <FontAwesomeIcon icon={faLinkedin} className="icon" /></a>

                </div>

            </div>
        </div>
    )
}

export default Footer