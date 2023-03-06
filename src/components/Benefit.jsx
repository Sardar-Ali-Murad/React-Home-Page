import React from 'react'
import "./Benefit.css"
import {benefit}  from "./data"

const Benefit = () => {
  return (
    <div className='benefitMain' id="about">
        <div className='benefitPart1'>
           <a>Benefits</a>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        </div>

        <div className='benefitGrid'>
           {
            benefit.map((item)=>{
                return(
                    <div className='benefitSingleBox'>
                    <img src={item.img}/>
                    <a>{item.text}</a>
                    <p>{item.description}</p>
                </div>
                    )
            })
           }
        </div>
    </div>
  )
}

export default Benefit
