import React from "react";
import "./Vedios.css";
import { Vedio1, Vedio2 } from "./data";
import Img from "../assets/vedio3.png"
import Svg from "../assets/vedioSvg.png"

const Vedios = () => {
  return (
    <div className="vedioBigMain">
     <img src={Svg} className="vedioSvg"/>
    <div className="vedioMain">
      {/* First Flex */}
      <div className="vedioFlex">
        {Vedio1.map((item) => {
          return (
            <div className="flexSingleVedio">
              <div className="flexSingleVedioImage">
                <img src={item.img} className="vedioImgs"/>
              </div>
              <div className="vedioText">
                <a>{item.text}</a>
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <button >Read More</button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Second Flex */}
      <div className="vedioFlex">
        {Vedio2.map((item) => {
          return (
            <div className="flexSingleVedio">
              <div className="vedioText">
                <a>{item.text}</a>
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <button >Read More</button>
              </div>
              <div className="flexSingleVedioImage">
                <img src={item.img} className="vedioImgs"/>
              </div>
            </div>
          );
        })}
      </div>

      <img src={Img} className="vedioBigImg"/>
    </div>
              </div>
  );
};

export default Vedios;
