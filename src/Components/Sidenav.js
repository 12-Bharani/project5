import React from 'react'
import "./Sidenav.css"
import img1 from "./Images/logoicon.png"
import img2 from "./Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEllipsis, faEllipsisV, faEllipsisVertical, faHeart, faHome, faMessage, faPlus, faPlusCircle, faPlusSquare, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons'


const Sidenav = () => {
  return (
    <div className='sidenav'>
      <img src={img2} 
      alt="" 
      />
      <div className="sidenav-buttons">
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faHome} className='icon' />
          <span>Home</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faSearch} className='icon' />
          <span>Search</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faCompass} className='icon' />
          <span>Explore</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faVideo} className='icon' />
          <span>Reels</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faMessage} className='icon' />
          <span>Messages</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faHeart} className='icon' />
          <span>Notification</span>      
        </button>
        <button className="sidenav-button">
          <FontAwesomeIcon icon={faPlusSquare}  className='icon'/>
          <span>Create</span>      
        </button>
        
      </div>
      <div className="sidenav-more">
      <button className="sidenav-button">
          <FontAwesomeIcon icon={faEllipsisVertical} className='icon' />
          <span>More</span>      
        </button>
      </div>
    </div>
    
  )
}

export default Sidenav