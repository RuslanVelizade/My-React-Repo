import React from "react";
import "./index.scss";
const Home = () => {
  return (
    <React.Fragment>
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="home-left">
              <h1>ELECTRICAL SERVICE PROVIDERS</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                eius velit magnam at porro fugiat architecto repellat. Omnis a
                ratione repellendus est iste ex in.
                          </p>
                          <button>Contact Us</button>
            </div>
                      <div className="home-right">
                          <img src="./src/assets/images/slider-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="services">
            <div className="ourservices">
            <h2>Our Services</h2>
            </div>
            <div className="boxes">
              <div className="box">
                <img className="boximg" src="./src/assets/images/Electric-Circuits.jpg" alt="" />
                <h3>Lorem Ipsum</h3>
                <p>There are many variations of passegaes of <br /> Lorem Ipsum available</p>
              </div>
              <div className="box">
              <img className="boximg" src="./src/assets/images/Electric-Circuits.jpg" alt="" />

                <h3>Lorem Ipsum</h3>
                <p>There are many variations of passegaes of <br /> Lorem Ipsum available</p>
              </div>
              <div className="box">
              <img className="boximg" src="./src/assets/images/Electric-Circuits.jpg" alt="" />
                <h3>Lorem Ipsum</h3>
                <p>There are many variations of passegaes of <br /> Lorem Ipsum available</p>
              </div>
              <div className="box">
              <img className="boximg" src="./src/assets/images/Electric-Circuits.jpg" alt="" />
                <h3>Lorem Ipsum</h3>
                <p>There are many variations of passegaes of <br /> Lorem Ipsum available</p>
              </div>
              <div className="box">
              <img className="boximg" src="./src/assets/images/Electric-Circuits.jpg" alt="" />
                <h3>Lorem Ipsum</h3>
                <p>There are many variations of passegaes of <br /> Lorem Ipsum available</p>
              </div>
             
            </div>
            <div className="buttondiv"> <button className="readmore">Read More
              </button></div>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
