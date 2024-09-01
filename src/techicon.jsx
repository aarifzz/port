import React from 'react'
import './techicon.css'
import html from './assets/html.png'
import js from './assets/js.png'
import library from './assets/physics.png'
import python from './assets/pythonn.png'
import css from './assets/css.png'
import java from './assets/javaaa.png'

function Techicon() {
  return (
    <div className='logos'>
        <div className='logoslide'>
            <img src={html} className='html' alt="HTML" />
            <img src={css} className='css' alt="CSS" />
            <img src={js} className='js' alt="JavaScript" />
            <img src={library} className='react' alt="React" />
            <img src={python} className='python' alt="Python" />
            <img src={java} className='java' alt="Java" />
        </div>
        <div className='logoslide'>
            <img src={html} className='html' alt="HTML" />
            <img src={css} className='css' alt="CSS" />
            <img src={js} className='js' alt="JavaScript" />
            <img src={library} className='react' alt="React" />
            <img src={python} className='python' alt="Python" />
            <img src={java} className='java' alt="Java" />
        </div>
    </div>
  )
}

export default Techicon