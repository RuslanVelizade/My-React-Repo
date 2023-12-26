import React from "react";
import "./index.scss";
import { TfiSettings } from "react-icons/tfi";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import service1 from "../../assets/images/services1.png";
import service2 from "../../assets/images/services2.png";
import service3 from "../../assets/images/services3.png";
import service4 from "../../assets/images/services4.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import Carousel from "../../components/carousel";
import { slides } from "../../data/carouselData.json";
const Home = () => {
  return (
    <>
      <section id="carousel">
        <div className="container">
        <Carousel data = {slides}/>
        </div>
      </section>

      <section id="services">
        <div id="services-top">
          <div className="container">
            <div className="services-top">
              <div className="borderdiv">
                <span></span>
                <p>OUR TOP SERVICES</p>
              </div>
              <h1>Our Best Services</h1>
              <div className="boxes">
                <div className="box">
                  <TfiSettings className="boxicon" />
                  <h5>Stratagy planning</h5>
                  <p className="there">
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
                <div className="box">
                  <FaRegFileAlt className="boxicon" />
                  <h5>Insurance Service</h5>
                  <p className="there">
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
                <div className="box">
                  <AiOutlineUser className="boxicon" />
                  <h5>Audit & Evaluation</h5>
                  <p className="there">
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="services-bottom">
          <div className="container">
            <div className="services-bottom">
              <div className="services-bottom-left">
                <img
                  className="about"
                  src="./src/assets/images/about.png"
                  alt=""
                />
              </div>

              <div className="services-bottom-right">
                <p>OUR TOP SERVICES</p>
                <h1>Our Best Services</h1>
                <h6>
                  Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
                  cillum dolore egru lofrre dsu quality mollit anim laborumuis
                  au dolor in voluptate velit cillu.
                </h6>
                <p>
                  Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd
                  re voluptate velit esscillumlore eu quife nrulla parihatur.
                  Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                  dhjinulpadeserunt moll.
                </p>
                <a href="">MORE ABOUT US</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <div className="portfolio">
            <div className="text">
              <h6>OUR PORTFOLIOS OF CASES</h6>
              <h1>Featured Case Study</h1>
            </div>
            <div className="boxes">
              <div className="box">
                <img src={service1} alt="" />
                <div>
                  <p>Strategy planing</p>
                  <p>Within the construction industry as their overdraft</p>
                </div>
              </div>
              <div className="box">
                <img src={service2} alt="" />
                <div>
                  <p>Strategy planing</p>
                  <p>Within the construction industry as their overdraft</p>
                </div>
              </div>
              <div className="box">
                <img src={service3} alt="" />
                <div>
                  <p>Strategy planing</p>
                  <p>Within the construction industry as their overdraft</p>
                </div>
              </div>
              <div className="box">
                <img src={service4} alt="" />
                <div>
                  <p>Strategy planing</p>
                  <p>Within the construction industry as their overdraft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="members">
        <div className="container">
          <div className="members">
            <div className="title">
              <h6>OUR PROFESSIONAL MEMBERS</h6>
              <h1>Our Team Mambers</h1>
            </div>
            <div className="cards">
              <div className="card">
                <div className="img">
                  <img src={team2} alt="" />
                </div>

                <h6>Ethan Welch</h6>
                <span>UX Designer</span>
              </div>
              <div className="card">
                <div className="img">
                  <img src={team3} alt="" />
                </div>
                <h6>Ethan Welch</h6>
                <span>UX Designer</span>
              </div>
              <div className="card">
                <div className="img">
                  <img src={team1} alt="" />
                </div>
                <h6>Ethan Welch</h6>
                <span>UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
