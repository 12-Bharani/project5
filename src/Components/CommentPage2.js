import React from 'react'
import img2 from "./Images/profile2.jpg"
import "./CommentPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark, faBookmark, faComment, faEllipsisH, faEllipsisV, faHeart, faPaperPlane, faSave, faSmile } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const CommentPage = (props) => {
    const [inputText, setInputText] = useState("")
    let [Count, setCount] = useState(0)
    let [lCount, setlCount] = useState("")
    let newVal,com,like;
    let commentVal=document.querySelector('#list')
    const date=new Date();
    const showTime=date.getHours()+ ':' + date.getMinutes() 
    const showTime1 = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
   


    const handleChange=(event)=>{
        newVal=event.target.value;
    }
    const [items,setItems] = useState([])

    const addItems=()=>{
        if(newVal){
         setItems(newVal)
       }
       Count++
       com=Count
       setCount(com)
       }
    const likes=()=>{
        lCount++
        like=lCount
        setlCount(like)

       }
       const toggle2=()=>{
        props.setComOverlay2(!props.comOverlay2)
    }
    

    
  return (
    <div className="main">
        <div className='comment-page'>
            <div className="container-left">
                 <img src={img2} alt="" className='left-img' />
            </div>
            <div className="container-right">
            
                <div className="content-heading">
                    
                        <div className="content-left">
                            <img src={img2} alt="" />
           
                            <p>GowriSankar{" . "}</p>
                        </div>
                        <div className="content-right">
                            <FontAwesomeIcon icon={faEllipsisH} className='comment-icon' />
                            
                        </div>

                </div>
                <div className="content">
                <div className="content-left">
                            <img src={img2} alt="" />
           
                            <p>GowriSankar{" . "}<span id='list'>
                             {items}   </span> 
                             
                             <div>
                            <p id='spec'>{showTime} <span>{lCount} likes </span> <span>Reply</span></p>
                            </div></p>
                            
                        </div>
                        
                        <div className="content-right">
                            <FontAwesomeIcon icon={faHeart} className='comment-icon' onClick={likes} />
                            
                        </div>

                </div>
                <div className="bottom">
                    <div className="icons">
                        <div className="right">
                            {/* <FontAwesomeIcon icon={faHeart} className='input-bottom-icon' />
                            <FontAwesomeIcon icon={faComment} className='input-bottom-icon' />
                            <FontAwesomeIcon icon={faPaperPlane} className='input-bottom-icon' /> */}
                            <div className="likes">
                                <p id='likes'>comments <span>{Count}</span> </p>
                            </div>
                        </div>
                        <div className="left">
                            <FontAwesomeIcon icon={faBookmark} className='input-bottom-icon' />
                        </div>
                    </div>

                    <div className="input">
                        <FontAwesomeIcon icon={faSmile} className='input-bottom-icon' />
                        <input type="text" placeholder='Add comments' onChange={handleChange} />
                        <button onClick={addItems}>Post</button>
                    </div>
                </div>
            </div>
            <button onMouseOver={toggle2}>close</button>
       

        </div>
    </div>
  )
}

export default CommentPage