import React from 'react'
import "./Body.css"
import geoffry from "./Geoffry.PNG"



export default function Body() {
  return (
    <>
       
       
        <div className='grid-container'>
            <div className='about-section'>
            <img className='about-pic' src={geoffry} />
                <h3 className='about-header'>About Us</h3>
                <p className='about-p'>
                    description
                </p>
            </div>
           
            <div className='professionalism-section'>
            <img className='prof-pic' src={geoffry} />
                <h3 className='prof-header'>Professionalism</h3>
                <p className='prof-p'>
                    Professionalism section
                </p>
            </div>
            <div className='coding-section'>
            <img className='coding-pic' src={geoffry} />
                <h3 className='coding-header'>Coding</h3>
                <p className='coding-p'>
                    Coding section
                </p>
            </div>
          
            <div className='social-section'>
            <img className='social-pic' src={geoffry} />
                <h3 className='social-header'>Social</h3>
                <p className='social-p'>
                    Social Section
                </p>
            </div>
            
                <button className='join-btn'>Register Now</button>
        </div>
    </>
  )
}
