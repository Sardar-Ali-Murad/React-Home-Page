import React from 'react'
import "./Team.css"
import Team01 from "../assets/team1.png"
import Team02 from "../assets/team2.png"
import Team03 from "../assets/team3.png"

import {Team1,Team2} from "./data"

const Team = () => {
  return (
    <div className='teamMain'>
      <img src={Team01} className="teamBigImgs"/>
      <div className='teamGrid'>
        {
            Team1.map((item)=>{
                return <div className='teamSingle'>
                    <a>{item.text}</a>
                    <p>{item.description}</p>
                    <div className='teamBtn'>
                    <button>Details</button>
                    </div>
                </div>
            })
        }
      </div>
        <img src={Team02} className="teamBigImgs"/>
      <div className='teamGrid'>
        {
            Team2.map((item)=>{
                return <div className='teamSingle'>
                    <a>{item.text}</a>
                    <p>{item.description}</p>
                    <div className='teamBtn'>
                    <button>Details</button>
                    </div>
                </div>
            })
        }
      </div>
        <img src={Team03} className="teamBigImgs"/>
    </div>
  )
}

export default Team
