import React from 'react'
import "./Navbar.scss";
import { Link } from "react-router-dom";

function OtherPage() {


    setTimeout(() => {
        const element = document.getElementById('programs_div');
        if (element) {
            const offset = element.offsetTop;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    }, 500);


}


const Navbar = () => {
    return (
        <div className='navbar_parent'>
            <ul id='navbar'>
                <li><Link to="/">Početna</Link></li>
                {/*} <li><Link to="http://localhost:3000/#categories">Programi</Link></li>
               
               */
                }

                <li> <Link to="http://localhost:3000/#programs_div" onClick={OtherPage}>Programi</Link></li>
                <li><Link to="/gallery">Galerija</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>

            </ul>

        </div>
    )
}

export default Navbar