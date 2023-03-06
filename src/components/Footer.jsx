import React from "react";
import "./Footer.css";
import Img1 from "../assets/footer1.png";
import Img3 from "../assets/footer3.png";
import Img2 from "../assets/footer2.png";
import {CiTwitter}  from "react-icons/ci"
import {FaFacebookF}  from "react-icons/fa"
import {TbVectorBezierCircle} from "react-icons/tb"
import {IoLogoInstagram}  from "react-icons/io"

const Footer = () => {
  return (
    <div className="footerBigMain">
      <div className="footerMain">
        {/*  */}
        <div className="footerPart1">
          <p>
            Foralldoctors.com has a valid certificate issued by a trusted
            authority. The page you are viewing was encrypted before being
            transmitted over the internet
          </p>
          <p>
            Encryption makes it difficult for unauthorized people to view
            information traveling between computers. It is therefore unlikely
            that anyone read this page as it traveled across the network.
          </p>
          <div className="footerFlex">
            <img src={Img1} />
            <p>This site works only in browsers with SNI support.</p>
          </div>
          <div className="footerFlex">
            <img src={Img2} />
            <p>This server supports TLS 1.3.</p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="footerInfo">
          <a>Quick Links</a>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Contact Us </p>
          <p>Terms of Service Privacy Policy </p>
          <p>Site Map </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="footerInfo">
        <a>CONTACT US</a>
          <p>Mailing Address:xx00 E. Union Ave</p>
          <p>Suite 1100. Denver, CO 80237</p>
          <p>+999 90932 627</p>
          <p>support@yourdomain.com</p>
          <div className="footerIcons">
             <div className="footerTwitter">
               <CiTwitter/>
             </div>
             <div className="footerIconBoxes">
               <FaFacebookF/>
             </div>
             <div className="footerIconBoxes">
              <TbVectorBezierCircle/>
             </div>
             <div className="footerIconBoxes">
              <IoLogoInstagram/>
             </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="line"></div>
      <div className="footerLastPart">
        <p className="copyright">Copyright © 2022 For All Doctors Inc. All Rights Reserved.</p>
        <div className="footerLastPartLock">
          <div className="lockMain">
             <img src={Img3}/>
          </div>
          <div className="lockText">
              <a>AES 256-BIT</a>
              <a>SSL SECURED</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
