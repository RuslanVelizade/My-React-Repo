import React from 'react'
import "./index.scss"
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer">
                <div className="left">
                    <p>Copyright ©2023 All rights reserved | This template is made with 
                        <FaHeart className='heart'/> by <span>Colorlib</span>
                    </p>
                </div>
                <div className="right">
                   <FaTwitter className='social'/>
                   <FaFacebookF className='social'/>
                   <TbWorld className='social'/>
                   <FaInstagram className='social'/>

                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer