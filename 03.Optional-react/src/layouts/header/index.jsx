import React, { useState } from "react";
import "./index.scss";
import { TbClockHour4 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <header>
        <div id="header-top">
          <div className="container">
            <div className="header-top">
              <div className="box">
                <p>
                  <TbClockHour4 className="hour" /> MON - SAT: 6.00 AM - 10.00
                  PM
                </p>
                <p>SUN: CLOSED</p>
              </div>
              <div className="box">
                <FaFacebookF className="social" />
                <FaTwitter className="social" />
                <FaLinkedinIn className="social" />
                <FaGooglePlusG className="social" id="plus" />
              </div>
            </div>
          </div>
        </div>
        <div id="header-bottom">
          <div className="container">
            <div className="header-bottom">
              <div className="box">
                <img src="./src/assets/images/loder.jpg" alt="" />
              </div>
              <nav>
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services"}>Services</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <NavLink to={"/blog"}>Blog</NavLink>
                    {isHovered && (
                      <div
                        className={`hover-content ${
                          isHovered ? "visible" : ""
                        }`}
                      >
                        <NavLink to={"/blog/blog"}>Blog</NavLink>
                        <NavLink to={"/blog/blogdetails"}>Blog Details</NavLink>
                        <NavLink to={"/blog/element"}>Element</NavLink>
                      </div>
                    )}
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
