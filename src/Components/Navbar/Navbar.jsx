import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className='header'>
            <ul id='navbar'>
                <li><a href="https://www.google.com/">Početna</a></li>
                <li><a href="https://www.google.com/">Programi</a></li>
                <li><a href="https://www.google.com/">Galerija</a></li>
                <li><a href="https://www.google.com/">Kontakt</a></li>
            </ul>

        </div>
    )
}

export default Navbar