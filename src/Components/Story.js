import React, { useState } from 'react'
import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"
import img4 from "./Images/profile4.jpg"
import img5 from "./Images/profile5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Story.css"


const Story = () => {
    const [overlay, setOverlay] = useState(false)
    let story1=document.querySelector("#story1")
    const [image, setImage] = useState(null)
    const [story, setstory] = useState([
        {
            name:"your Story"
        }
        
    ])
    const [overlay1, setOverlay1] = useState(false)
    const [overlay2, setOverlay2]= useState(false)
    const [overlay3, setOverlay3] = useState(false)

const togleModal=(element)=>{
    setOverlay(!overlay)
    setImage(img1)

}
const togleModal1=()=>{
    setOverlay(!overlay)
    setImage(img3)
}
const togleModal2=()=>{
    setOverlay(!overlay)
    setImage(img2)
}
const togleModal3=()=>{
    setOverlay(!overlay)
    setImage(img4)
}

    
       

  return (
   
    <div className="story">
        {overlay && (
            <div className="modal">
         
                <div className="overlay" onClick={togleModal}>
            
                    <img src={image} alt="" />
                    <button onClick={togleModal}>close</button>
                
                    
                </div>
            </div>


        )}

     
        <div className="header-story">
            <div className="stories" id='story1'>
                
                <img src={img1} alt="" width="60" height="60" onClick={togleModal}   id='img1' />
                <FontAwesomeIcon icon={faPlus} />
            
             <p>Your Story</p>
        
            </div>

            <div className="stories" >
            
                <img src={img3} alt="" width="60" height="60" onClick={togleModal1}
            />
             <p>Manikandan</p>
            </div>

            <div className="stories">
        
                <img src={img2} alt="" width="60" height="60" onClick={togleModal2}
            />
             <p>GowriSankar</p>
            </div>

            <div className="stories">
                 <img src={img4} alt="" width="60" height="60" onClick={togleModal3}
            />
             <p>Rohit</p>
            </div>
        </div>
       
        
        
    </div>


   
  )
}

export default Story