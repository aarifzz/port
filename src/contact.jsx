import React from 'react'
import './contact.css'
import xLogo from './assets/twitterx.png'
function Contact() {
  return (
    <div>
        <h1 className='contact'>GET IN TOUCH</h1>
        <div>
          <h3 className='h3'>Got a question, proposal or project or want to work <br></br>together on something? Feel free to reach out.</h3>
        </div>
        <div className="linee1"></div>
        <div className='last'>
          <h3 className='lastc'>&nbsp; LET'S &nbsp;</h3>
          <h3 className='lastc'> COLLABORATE-</h3>
          <h3 className='lastc'>SAY HELLO</h3>
          <h3 className='lastc'>-WANNA BE &nbsp;</h3>
          <h3 className='lastc'> STARTING &nbsp;</h3>
          <h3 className='lastc'>SOMETHING?</h3>
          <h3 className='lastc'>-LET'S TALK</h3>
          {/* duplicate */}
          <h3 className='lastc'>&nbsp; LET'S &nbsp;</h3>
          <h3 className='lastc'> COLLABORATE-</h3>
          <h3 className='lastc'>SAY HELLO</h3>
          <h3 className='lastc'>-WANNA BE &nbsp;</h3>
          <h3 className='lastc'> STARTING &nbsp;</h3>
          <h3 className='lastc'>SOMETHING?</h3>
          <h3 className='lastc'>-LET'S TALK -&nbsp;</h3>
          {/* <h3 className='lastc'>LET'S TALK-LET'S COLLABORATE-SAY HELLO-WANNA BE STARTING SOMETHING?</h3>
          <h3 className='lastc'>LET'S TALK-LET'S COLLABORATE-SAY HELLO-WANNA BE STARTING SOMETHING?</h3>
          <h3 className='lastd'>LET'S TALK-LET'S COLLABORATE-SAY HELLO-WANNA BE STARTING SOMETHING?</h3> */}

          


          </div>
        <div className="linee2"></div>
        {/* <div>
          <h3 className='mail'>aarifhussain2506@gmail.com</h3>
          <div className="buttons">
            <button className='stylish-button'>TWITTER</button>
            <button className='stylish-button'>INSTAGRAM</button>
            <button className='stylish-button'>GITHUB</button>
            <button className='stylish-button'>LINKEDIN</button>
          </div>
        </div> */}
        <div className="social-buttons">
        <a href="https://x.com/Aarifhussainn" target="_blank" rel="noopener noreferrer" className="social-button">
        <img src={xLogo} alt="X Logo" className="icon" />
      </a>
    <a href="https://www.instagram.com/_.aaxif._/" className="social-button instagram">
        <i className="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/aarifzz" className="social-button github">
        <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/aarif-hussain-7225812a6/" className="social-button linkedin">
        <i className="fab fa-linkedin"></i>
    </a>
</div>


    </div>
  )
}

export default Contact