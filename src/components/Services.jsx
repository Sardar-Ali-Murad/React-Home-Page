import React from "react";
import "./Services.css";
import {
  servicesPart1,
  servicesPart2,
  servicesPart3,
  servicesPart4,
} from "./data";
import Img1 from "../assets/servicesImg1.png";
import Img2 from "../assets/servicesImg2.png";
import Img3 from "../assets/serviceImg3.png";
import Svg from "../assets/servicesSvg.png";

const Services = () => {
  return (
    <div className="servicesBigMain">
        <img src={Svg} className="serviceSvg" />
      <div className="servicesMain" id="services">
        {/* Services Part 1 */}
        <div className="coreServices">
          <div className="corePart1">
            <a>Our Core Services</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis{" "}
              <br />
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
          <div className="coreBtn">
            <button className="signUp"> Sign Up</button>
          </div>
        </div>

        {/* Services Grids Part 1 */}
        <div className="servicesGrids">
          {servicesPart1.map((item) => {
            return (
              <div className="servicesGridBox">
                <img src={item.img} />
                <div className="servicesGridBoxText">
                  <a>{item.text}</a>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Img1 */}
        <div className="serviceImages">
          <img src={Img1} className="serviceImg" />
        </div>

        {/* Services Grids Part 2 */}
        <div className="servicesGrids">
          {servicesPart2.map((item) => {
            return (
              <div className="servicesGridBox">
                <img src={item.img} />
                <div className="servicesGridBoxText">
                  <a>{item.text}</a>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Img2 */}
        <div className="serviceImages">
          <img src={Img2} className="serviceImg" />
        </div>

        {/* Services Grids Part 3 */}
        <div className="servicesGrids">
          {servicesPart3.map((item) => {
            return (
              <div className="servicesGridBox">
                <img src={item.img} />
                <div className="servicesGridBoxText">
                  <a>{item.text}</a>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Img2 */}
        <div className="serviceImages">
          <img src={Img3} className="serviceImg" />
        </div>

        {/* Services Grids Part 4 */}
        <div className="servicesGrids">
          {servicesPart4.map((item) => {
            return (
              <div className="servicesGridBox">
                <img src={item.img} />
                <div className="servicesGridBoxText">
                  <a>{item.text}</a>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
