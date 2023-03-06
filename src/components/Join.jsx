import React from "react";
import "./Join.css";
import {join} from "./data"
import Img from "../assets/joinBigImg.png"
import Svg from "../assets/joinSvg.png"
// This Compoenent is using the some of css from the services

const Join = () => {
  return (
    <div className="joinBigMain">
      <img src={Svg} className="joinSvg"/>
    <div className="joinMain">
      <div className="joinPart1">
        <a>Who can join?</a>
        <p>
          ForAllDoctors.com is a private, secure and Free Professional and
          Social <br /> Networking website for medical, legal and Ph.D.
          professionals worldwide.
        </p>
      </div>

      <div className="joinFlex">
        <div className="joinFlexPart1">
          {join.map((item) => {
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
        <div>
            <img src={Img} className="joinImg"/>
        </div>
      </div>

    </div>
          </div>
  );
};

export default Join;
