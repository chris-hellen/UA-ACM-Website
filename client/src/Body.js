import React from 'react'
import "./Body.css"
import geoffry from './Geoffry.PNG'

export default function Body() {
  return (
    <>
        <div className='grid-container'>
            <div className='about-section'>
                <h3 className='about-header'>About Us</h3>
                <p className='about-p'>
                    UA ACM is the leading Computer Science club here at The Capstone.
                    Hositng 255 members, we pride ourselves on our ability to foster a passion for the world of computer science as well as give you the tools in order to thrive in the Industry post college!
                </p>
            </div>
           
            <div className='professionalism-section'>
                <h3 className='prof-header'>Professionalism</h3>
                <p className='prof-p'>
                    Professionalism section
                </p>
            </div>
            <div className='coding-section'>

                <h3 className='coding-header'>Coding</h3>
                <p className='coding-p'>
                    Coding section
                </p>
            </div>
          
            <div className='social-section'>
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
