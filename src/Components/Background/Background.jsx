import React from 'react'
import video1 from "../../assets/video1.mp4"
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png" 
import './Background.css'
const Background = ({playStatus , heroCount}) => {
   

    if(playStatus === true){
        return(
            <video className='background faide-in' autoPlay muted loop>
                <source src= {video1} type='video/mp4' />
            </video>
        )
        }
        else if(heroCount === 0) {
            return(
                <img className='background faide-in' src={img1} alt="" />
            )

        }
        else if(heroCount === 1) {
            return(
                <img className='background faide-in' src={img2} alt="" />
            )

        }
        else if(heroCount === 2) {
            return(
                <img className='background faide-in' src={img3} alt="" />
            )

        }
    }

  


export default Background