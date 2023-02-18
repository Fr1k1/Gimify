import React from 'react'
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar_parent'>
            <ul id='navbar'>
                <li><Link to="/">Početna</Link></li>
                {/*<li><Link to="/programs">Programi</Link></li>*/}
                <li><a href="#categories">Programi</a></li>
                <li><Link to="/gallery">Galerija</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>

        </div>
    )
}

export default Navbar