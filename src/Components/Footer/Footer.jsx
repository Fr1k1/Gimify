import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import "./Footer.scss";

library.add(faInstagram);


const Footer = () => {
    return (
        <div id='footer_div'>

            <div id="red_line"></div>

            <div id="icons">
                <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'instagram' }} />
            </div>
        </div>
    )
}

export default Footer