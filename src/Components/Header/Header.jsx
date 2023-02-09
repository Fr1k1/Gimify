import React from 'react'
import "./Header.scss";
import Logo from "../../assets/barbell.png";

const Header = () => {
    return (
        <div className='header'>

            <img src={Logo} alt="" className='logo' />

            <ul id='navbar'>
                <li><a href="https://www.google.com/">Početna</a></li>
                <li><a href="https://www.google.com/">Programi</a></li>
                <li><a href="https://www.google.com/">Galerija</a></li>
                <li><a href="https://www.google.com/">Kontakt</a></li>
            </ul>
        </div>
    )
}

export default Header