import React,{useEffect,useRef} from 'react'
import './work.css'
import memory from './assets/memory.png'
import todo from './assets/todo.png'
import gym from './assets/gym.png'
import html from './assets/html.png'
import js from './assets/js.png'
import css from './assets/css.png'
const iconmap={html:html,css:css,js:js};
function Work(props) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (window.VanillaTilt) {
      window.VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);
  return (
    <div className="main">
      

    {/* <div className='line1'></div> */}
    <div className='work1'>
      <div className="divv">
        <h3 className='topic1'>{props.cat.title}</h3>
        {/* <h3 className='topic1d'>I developed a JavaScript-based memory matching game that challenges players to match pairs of cards<br></br> within a set time limit. The game progresses through three increasingly difficult levels, each with unique<br></br>  challenges and time adjustments. The primary goal is to match all cards before the timer runs out.</h3> */}
        <h3 className='topic1d'>{props.cat.des}</h3>


        <div className="div1">
          {/* {props.cat.icon==2?<div className="img">
          <img src={html} className='html'/>
            <img src={css} className='css'/>
          </div>:<div className="img">
          <img src={html} className='html'/>
            <img src={css} className='css'/>
            <img src={js} className='js'/>

          </div>}; */}
          {/* <div className="img">
          <img src={html} className='html'/>
            <img src={css} className='css'/>
            <img src={js} className='js'/> *

          </div> */}
        <div  className="img">
            {props.cat.icon.map((tech, index) => (
              <img key={index} src={iconmap[tech]} className='img' alt={tech} />
            ))}
          </div>
          <button>Check out ! </button>
        </div>
      </div>
    </div>
      <div ref={tiltRef} className='memorycontainer'>
        <img src={props.cat.images} className='memory'/>
      </div>
    </div>
  )
}

export default Work