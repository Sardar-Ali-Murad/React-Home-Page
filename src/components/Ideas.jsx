import React from 'react'
import "./Ideas.css"

const Ideas = () => {
  return (
    <div className='ideasMain'>
        <div className='ideasContent'>
      <a className='ideaHead'>Post your Ideas for millions of people to see</a>
      <div className='ideasBoxes'>
         <div className='singleIdea'>
            <a>Post a Blog</a>
         </div>
         <div className='singleIdea'>
            <a>Post a Ad</a>
         </div>
         <div className='singleIdea'>
            <a>Post a Event</a>
         </div>
         <div className='singleIdea'>
            <a>Post a Topic - Forum</a>
         </div>
         <div className='singleIdea'>
            <a>Create Group</a>
         </div>
         <div className='singleIdea'>
            <a>Post a Article</a>
         </div>
      </div>
        </div>
    </div>
  )
}

export default Ideas
