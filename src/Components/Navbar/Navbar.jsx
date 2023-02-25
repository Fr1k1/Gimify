import React, { useState } from 'react'
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars_navbar.png";

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

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <>
          {menuOpened === false && mobile === true ? (
            
            <div id='bars_div' onClick={()=>setMenuOpened(true)}>
            <img src={Bars} alt="" id="bars" ></img>
            </div>
          ) : (
            <div className="navbar_parent">
              <ul id="navbar">
                <li onClick={()=>setMenuOpened(false)}>
                  <Link to="/">Početna</Link>
                </li>
      
                <li onClick={()=>setMenuOpened(false)}>
                  <Link to="http://localhost:3000/#programs_div" onClick={OtherPage}>
                    Programi
                  </Link>
                </li>
                <li onClick={()=>setMenuOpened(false)}>
                  <Link to="/gallery">Galerija</Link>
                </li>
                <li onClick={()=>setMenuOpened(false)}>
                  <Link to="/contact">Kontakt</Link>
                </li>
              </ul>
            </div>
          )}
        </>
      );
      
}

export default Navbar