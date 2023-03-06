import React from "react";
import "./FAQ.css";
import Img1 from "../assets/faqImg1.png"
import Img2 from "../assets/faqImg2.png"
const FAQ = () => {
  return (
    <div>
      <div className="faqMain" id="faq">
        <div className="joinPart1">
          <a>Frequently Asked Questions</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />{" "}
            quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        {/*  */}
        <div className="faqConent">
           <div className="faqPart1">
               <div className="faqParts">
                  <a>Is membership exclusive and free for all doctors, lawyers and PhDs?</a>
                  <div className="line"></div>
                  <p>Yes, if you have a doctorate in any area, whether law, education, sciences, medicine or any other, you are welcome to join as a member of this site which has been designed and dedicated to you and your professional and social needs.</p>
               </div>

               <div className="faqParts">
                  <a>What is Token Sale and pre-sale?</a>
                  <div className="line"></div>
                  <a>What is the pre-sale start date?</a>
                  <div className="line"></div>
                  <a>how may I take part in pre-sale?</a>
                  <div className="line"></div>
               </div>
           </div>

           <div>
             <img src={Img1} className="faqImg1"/>
           </div>
        </div>
        {/*  */}
      </div>
      <div className="Img2Mian">
      <img src={Img2} className="Img2"/>
      </div>
      {/*  */}
    </div>
  );
};

export default FAQ;
