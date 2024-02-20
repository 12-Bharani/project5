import React from 'react'
import "./Homepage.css"
import Sidenav from "./Sidenav"
import Timeline from "./Timeline"
import BottomNav from './BottomNav'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="homepage-nav">
         <Sidenav />
            
        </div>
        <div className="homepage-timeline">
          <Timeline />

          <div className="homepage-bottom">
          <BottomNav />
        </div>
                
        </div>
        


    </div>
  )
}

export default Homepage