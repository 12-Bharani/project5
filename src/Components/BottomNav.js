import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEllipsis, faEllipsisV, faEllipsisVertical, faHeart, faHome, faMessage, faPlus, faPlusCircle, faPlusSquare, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons'
import "./BottomNav.css"

const BottomNav = () => {
  return (
    <div>
        <div className="bottomnav-buttons">
          <button className="bottomnav-button">
            <FontAwesomeIcon icon={faHome} className='bottom-icon' />
                  
          </button>
          <button className="bottomnav-button">
            <FontAwesomeIcon icon={faSearch} className='bottom-icon' />
            
                
          </button>
          <button className="bottomnav-button">
            <FontAwesomeIcon icon={faPlusSquare}  className='bottom-icon'/>
                
          </button>
            {/* <button className="bottomnav-button">
              <FontAwesomeIcon icon={faCompass} className='bottom-icon' />
                
            </button> */}
          <button className="bottomnav-button">
            <FontAwesomeIcon icon={faVideo} className='bottom-icon' />
                
          </button>
          <button className="bottomnav-button">
            <FontAwesomeIcon icon={faMessage} className='bottom-icon' />
                
          </button>
          {/* <button className="bottomnav-button">
            <FontAwesomeIcon icon={faHeart} className='bottom-icon' />
                
          </button> */}
          
        
      </div>
     
    </div>
  )
}

export default BottomNav