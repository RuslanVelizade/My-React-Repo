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
    </React.Fragment>
  );
};

export default Home;
