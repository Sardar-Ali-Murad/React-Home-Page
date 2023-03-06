import React from "react";
import "./About.css";
import Img1 from "../assets/about01.png";
import Img2 from "../assets/about02.png";
import Img3 from "../assets/about03.png";

const About = () => {
  return (
    <div className="aboutBigMain" id="home">
      <div className="aboutGrid aboutCenter">
        <div className="aboutSingle">
          <img src={Img1} />
          <p>Doctors, Lawyers & PhDs <br/> Only</p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="aboutSingle">
          <img src={Img2} />
          <p>Posted By Doctors, Lawyers & PhDs Only</p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="aboutSingle">
          <img src={Img3} />
          <p>Viewed By Doctors, Lawyers & PhDs Only</p>
          <button className="learnMore">Lear More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
