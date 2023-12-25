import React from 'react'
import "./index.scss"
import { TfiSettings } from "react-icons/tfi";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
// import HomeCarousel from '../../components/carousel'

const Home = () => {
  return (
    <>
    
    <div style={{height: "30vh", display: "flex", alignItems: "center"} }><h1>Carousel</h1></div>

    <section id="services">
        <div id="services-top">
            <div className="container">
                <div className="services-top"> 
                       
                      <div className='borderdiv'>
                        <span></span>
                      <p>OUR TOP SERVICES</p>
                      </div>
                      <h1>Our Best Services</h1>
                      <div className="boxes">
                      <div className="box">
                           <TfiSettings className='boxicon'/>
                          <h5>Stratagy planning</h5>
                          <p className='there'>There are many variations of   passages of lorem Ipsum available but the new majority have suffered.</p>
                        </div>
                      <div className="box">
                           <FaRegFileAlt className='boxicon'/>
                          <h5>Insurance Service</h5>
                          <p className='there'>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                        </div>
                      <div className="box">
                           <AiOutlineUser className='boxicon'/>
                          <h5>Audit & Evaluation</h5>
                          <p  >There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <div id="services-bottom">
        
          <div className="container">
            <div className="services-bottom">
            <div className="services-bottom-left">
            <img className='about' src="./src/assets/images/about.png" alt="" />
                </div>
              
              <div  className="services-bottom-right">
              <p>OUR TOP SERVICES</p>
              <h1>Our Best Services</h1>
                      <h6>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</h6>
              <p>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
              <a href="">MORE ABOUT US</a>
              </div>
            </div>
          </div>
          </div>
    </section>
    </>
  )
}

export default Home