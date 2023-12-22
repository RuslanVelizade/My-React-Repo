import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-top">
              <div className="footer-links">
                <div className="box">
                <CiLocationOn/>
                <p> Passages of Lorem Ipsum available</p>
                </div>
                <div className="box">
                  <FaPhoneAlt/>
                <p>Call: +012334567890</p>
                </div>
                <div className="box">
                  <MdEmail />
                <p>demo@gmail.com</p>
                </div>
              </div>
              <div>
                <div className="inputdiv">
                  <input type="text" />
                  <button>SUBSCRIBE</button>
                </div>
                <div className="social-icons">
                  <FaFacebook />
                  <TiSocialTwitterCircular />
                  <FaLinkedinIn />
                  <FaInstagram/>

                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <FaRegCopyright />
              <p>2019 All rights Reserved By free Html Templates</p>
            </div>
          </div>
        </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer