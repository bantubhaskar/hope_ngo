import React from "react";
import Typewriter from 'react-typewriter-effect';
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home-page">
      <div className="heading-content">
        <div className="translucent-card">
          <h3 className="head"></h3>
          
          <p className="home-para">
            <Typewriter
              text="Helping others and pervading empathy Sandeep and Aakanksha started HOPE on 20th July 2022 in Vidya Jyothi Institute of Technology, with a vision of serving humankind with a group of like-minded individuals."
              typeSpeed={50}
              cursorColor="white"
            />
          </p>
        </div>
        <h1 className="heading">
          <span className="col-word"></span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
