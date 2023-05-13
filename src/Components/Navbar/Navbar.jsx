import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars_navbar.png";

function OtherPage() {
  setTimeout(() => {
    const element = document.getElementById("programs_div");
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, 500);
}

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mobileNavbar, setMobileNavbar] = useState(false);

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <>
      {mobileNavbar === false && mobile === true ? (
        <div id="bars_div" onClick={() => setMobileNavbar(true)}>
          <img src={Bars} alt="" id="bars"></img>
        </div>
      ) : (
        <div className="navbar_parent">
          <ul id="navbar">
            <li onClick={() => setMobileNavbar(false)}>
              <Link to="/">Početna</Link>
            </li>

            <li onClick={() => setMobileNavbar(false)}>
              <Link to="/#programs_div" onClick={OtherPage}>
                Programi
              </Link>
            </li>
            <li onClick={() => setMobileNavbar(false)}>
              <Link to="/gallery">Galerija</Link>
            </li>
            <li onClick={() => setMobileNavbar(false)}>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
