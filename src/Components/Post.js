
import "./post.css"
import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"
import img4 from "./Images/profile4.jpg"
import img5 from "./Images/profile5.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faDotCircle, faEllipsisV, faHeart, faMessage, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import CommentPage1 from "./CommentPage1"
import CommentPage2 from "./CommentPage2"



const Post = () => {
  
   
    const incrComment=document.querySelector("#count")
    const incrLike=document.querySelector("#like1")
    const [comments1, setComments1] = useState("...")
    const [comments2, setComments2] = useState("...")
    const [comOverlay1, setComOverlay1]=useState(false)
    const [comOverlay2, setComOverlay2]=useState(false)
    let [lCount1, setlCount1] = useState(0)
    let [cCount1, setcCount1] = useState(0)
    let [lCount2, setlCount2] = useState(0)
    let [cCount2, setcCount2] = useState(0)
   
    let commentValue1,commentValue2
    let like1,like2;
    let com1,com2;
   
    
  
 

    const handleChange1=(event)=>{
        commentValue1=event.target.value;
        console.log(commentValue1);
        
       
    }
   
    const print1=()=>{
        

    if(commentValue1){
        setComments1(commentValue1)
        cCount1++
    }
    
    com1=cCount1
    setcCount1(com1)
    console.log(com1);
    
    

    }
  
    const likeIncrement1=()=>{
        lCount1++
        like1=lCount1
    setlCount1(like1)
    console.log(like1);
        


    }
    const handleChange2=(event)=>{
        commentValue2=event.target.value;
        console.log(commentValue2);
        
    
    }

    const print2=()=>{


    if(commentValue2){
    setComments2(commentValue2)
    cCount2++
    }
    
    com2=cCount2
    setcCount2(com2)



    }

    const likeIncrement2=()=>{
    lCount2++
    like2=lCount2
    setlCount2(like2)
    }
 
    const date=new Date();
    const showTime=date.getHours()+ ':' + date.getMinutes() 
    const showTime1 = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();


    const toggleModal1=()=>{
            setComOverlay1(!comOverlay1)
        }

    const toggleModal2=()=>{
            setComOverlay2(!comOverlay2)
        }
       
    
       
  
  
 
   
    
   
  return (
    <div className='post'>

        {comOverlay1 &&(
            <div className="post-modal">
         
                <div className="post-overlay" >
                    <CommentPage1 
                    setComOverlay1={setComOverlay1}
                   
                    comOverlay1={comOverlay1}
                    
                    />
            
                 
                
                    
                </div>
                
                    
            </div>


        )}

        {comOverlay2 && (
            <div className="post-modal">
         
                <div className="post-overlay" >
                    <CommentPage2
                    
                    comOverlay2={comOverlay2}
                    setComOverlay2={setComOverlay2}
                    />
            
                 
                
                    
                </div>
            </div>


        )}
        


        <div className="post-header">
          <div className="header-left">
            <img src={img3} alt="" />
           
            <p>Manikandan{" . "}<span>{showTime}</span></p>
          </div>
          <div className="header-right">
            <FontAwesomeIcon icon={faEllipsisV} className='post-header-icon' />
            
          </div>

        </div>
        <div className="post-image">
            <img src={img3} alt="" />
        </div>
        <div className="post-footer">
            <div className="footer-left">
                <button className="like-icon" >
                    <FontAwesomeIcon icon={faHeart} className="footer-left-icon" onClick={likeIncrement1} />

                </button>
               
                

                    <button className="comment-icon">
                       
                        <FontAwesomeIcon icon={faComment} className="footer-left-icon"  onClick={toggleModal1} />
                      
                    </button>
               
             
                <button className="share-icon">
                    <FontAwesomeIcon icon={faPaperPlane} className="footer-left-icon" />
                </button>
               
                
            </div>
            
            <div className="footer-right">
                <button className="more-icon">
                    <FontAwesomeIcon icon={faEllipsisV} className='footer-right-icon' />
                </button>
                
            </div>

        </div>
        <div className="post-bottom">
            <p id="like1" className="post-like">Likes <span> {lCount1} at {showTime}</span> </p>
            <p id="comment1" className="comments">Comments to mani : <span>{comments1}</span></p>
            <p id="count" className="post-comment"> Comments  <span>{cCount1} at {showTime}</span></p>
        </div>
       <div className="input">
       <FontAwesomeIcon icon={faSmile} className='input-bottom-icon' />

       <input type="text" placeholder="add comment" className="bottom-input" onChange={handleChange1} />
       <button onClick={print1}>Post</button>
       </div>

       <div className="post-header">
          <div className="header-left">
            <img src={img2} alt="" />
           
            <p>GowriSankar{" . "}<span>{showTime}</span></p>
          </div>
          <div className="header-right">
            <FontAwesomeIcon icon={faEllipsisV} className='post-header-icon' />
            
          </div>

        </div>
        <div className="post-image">
            <img src={img2} alt="" />
        </div>
        <div className="post-footer">
            <div className="footer-left">
                <button className="like-icon" >
                    <FontAwesomeIcon icon={faHeart} className="footer-left-icon" onClick={likeIncrement2} />

                </button>
               
                

                    <button className="comment-icon">
                        
                        <FontAwesomeIcon icon={faComment} className="footer-left-icon" on  onClick={toggleModal2}/>
                       
                    </button>
               
             
                <button className="share-icon">
                    <FontAwesomeIcon icon={faPaperPlane} className="footer-left-icon" />
                </button>
               
                
            </div>
            
            <div className="footer-right">
                <button className="more-icon">
                    <FontAwesomeIcon icon={faEllipsisV} className='footer-right-icon' />
                </button>
                
            </div>

        </div>
        <div className="post-bottom">
            <p id="like1" className="post-like">Likes <span> {lCount2} at {showTime}</span> </p>
            <p id="comment1" className="comments">Comments to mani : <span>{comments2}</span></p>
            <p id="count" className="post-comment"> Comments  <span>{cCount2}</span></p>
        </div>
       <div className="input">
       <FontAwesomeIcon icon={faSmile} className='input-bottom-icon' />

       <input type="text" placeholder="add comment" className="bottom-input" onChange={handleChange2} />
       <button onClick={print2}>Post</button>
       </div>
       <div>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       </div>
       
       
      
    </div>
  )
}

export default Post