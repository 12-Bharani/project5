import React from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Post from "./Post"
import { useState } from 'react'

import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"
import img4 from "./Images/profile4.jpg"
import img5 from "./Images/profile5.jpg"
import logo from "./Images/logo.png"
import Story from './Story'

const Timeline = () => {
 

  return (
    <div className='timeline'>
      <div className="timeline-left">
      <div className="logo">
        <img src={logo} 
      alt="" 
      />
        </div>
        
        <div className="timeline-story">
          <Story />
        </div>
        <div className="timeline-posts">
          
            <Post/>
          
        </div>

      </div>
      <div className="timeline-right">
       <Suggestion />

      </div>
    </div>
  )
}

export default Timeline