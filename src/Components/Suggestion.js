import React from 'react'
import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"
import img4 from "./Images/profile4.jpg"
import img5 from "./Images/profile5.jpg"
import img6 from "./Images/img1.jpg"
import "./Suggestion.css"



const Suggestion = () => {
  return (
    <div className='suggest'>

      
      <div className="profile-title">
          <div className="profile-left">
              <div className="image">
                  <img src={img1} alt="" width="60px" height="60px" />
              </div>
              <div className="details">
                <p className="name">Pheonix </p>
                <p className="surename">Salem</p>
              </div>
          </div>
          <div className="profile-right">
              <p>Switch</p>
          </div>
      </div>
      <div className="suggestions">
          <p>Suggestions for you</p>
          <p>See All</p>
        
        </div>
        
          <div className="suggestion-title">
            <div className="suggestion-left">
              <div className="image">
                
                <img src={img6} alt="" height="32" width="32" />
              
              </div>
              <div className="details">
                    <p className="name">Krishna</p>
                    <p className="location">kerala</p>
              </div>
            
            </div>
            
            <div className="suggestion-right">
              <p>Follow</p>
              
            </div>
          
          </div>
    </div>
  )
}

export default Suggestion