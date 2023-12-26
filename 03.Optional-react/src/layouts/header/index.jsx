import React, { useState } from 'react'
import "./index.scss"
import { TbClockHour4 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
const Header = () => {


  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <header>
       
           
                <div id='header-top'>
                    <div className="container">
                            <div className="header-top">
                            <div className='box'>
          <p ><TbClockHour4 className='hour'/> MON - SAT: 6.00 AM - 10.00 PM</p>
                    <p>SUN: CLOSED</p>
          </div>
          <div className='box'>
          <FaFacebookF className='social'/>
            <FaTwitter className='social'/>
            <FaLinkedinIn className='social'/>
            <FaGooglePlusG className='social' id='plus'/>
          </div>
                            </div>
                    </div>
          
                    
                </div>
                <div id='header-bottom'>
                    <div className="container">
                            <div className="header-bottom">
                            <div className='box'>
         <img src="./src/assets/images/loder.jpg" alt="" />
          </div>
             <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}
                    ><a href="">Blog</a>
                     {isHovered && (
            <div className={`hover-content ${isHovered ? 'visible' : ''}`}>
              <a href="#">Blog</a>
              <a href="#">Blog Details</a>
              <a href="#">Element</a>
            </div>
             )}
                    </li>
                    <li><a href="">Contact</a></li>
                </ul>
             </nav>
                            </div>
                    </div>
          
                    
                </div>
            
        
    </header>
    </>
  )
}

export default Header