import React, { useState } from "react";
import logo from "../../assets/logo.png";
import circle from "../../assets/circle.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={circle} alt="app__logo" className="circle" />
        <img src={logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Pricing</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Features</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Customers</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Contact Us</a>
        </li>
      </ul>
      <button className="app__navbar-login">Login/signup</button>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color={toggleMenu ? "#fff" : "#000"}
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GrClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Pricing</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Features</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Customers</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
