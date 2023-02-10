import React from 'react'
import "./Header.scss";
import Logo from "../../assets/barbell.png";
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='header'> {/* header u sebi sadrzi logo i navbar radi reusabilityja */}

            <img src={Logo} alt="" className='logo' />

            <Navbar />
        </div>
    )
}

export default Header