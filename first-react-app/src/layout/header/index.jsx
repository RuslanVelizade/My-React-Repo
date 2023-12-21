import React from "react";
import { FaBeer } from "react-icons/fa";
import "./index.scss"
const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="header">
            <h1><FaBeer />Electrochip</h1>
            <nav>
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">SERVICE</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
