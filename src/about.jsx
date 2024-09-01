import React from 'react'
import './about.css'
import lap from './assets/png1.png'
function About() {
  return (
    <>

        <section className="about" id="about">
        <div><h1 className='aboutt'>abouT</h1></div>
        <div><h3 className='aboutme'> Welcome to my world of digital craftsmanship.<br>
        </br>  I am Mohammed Aarif Hussain,  a passionate<br></br> frontend developer dedicated to bringing ideas<br></br> to life through code, With a keen eye for design<br></br> and a love for seamless user experiences I craft,<br></br> websites that not only function beautifully but <br></br>also tell your story<br></br></h3></div>
        <div className='image'><img src={lap} className='lap'/></div><br></br><br></br><br></br>
        <div className=''>
          <h1 className='works'> WORKS</h1> 
          <div className='worksc'> <h3> Here, you'll find a collection of my most significant works,<br></br> each reflecting my journey as a frontend developer. Dive<br></br> into these projects to see how I've applied my skills in HTML,<br></br> CSS, JavaScript, and create engaging user experiences.</h3></div> 
          </div>
        </section>
    </>
  )
}

export default About