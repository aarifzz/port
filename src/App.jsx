import { useState } from 'react'
import Profile from './profile'
import Navbar from './navbar'
import About from './about'
import Work from './work'
import Tech  from './tech'
import Contact from './contact'
import './App.css'
import './work.css'
import Techicon from './techicon'; // Ensure this import is correct
import memory from './assets/memory.png';
import gym from './assets/gym.png';
import todo from './assets/todo.png';
import calculator from './assets/calci.png'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import './index.css'


function App() {
const array=[
  {title:"Flip & Find",
  des:"Flip & Find is an engaging memory card game designed to challenge your focus and memory skills. The game features multiple levels of increasing difficulty, where players must flip cards and match pairs within a limited time. With each level, the challenge intensifies as time becomes a crucial factor. Enjoy a fun and rewarding experience, complete with a confetti celebration for each successful level! Perfect for sharpening your mind and having a blast along the way.",
  images:memory,
  icon:["html","css","js"]}
  ,{title:"Gym",
    des:"Fitness Freak is a dynamic online gym website designed with a sleek, dark theme and vibrant animations. It offers personalized fitness programs and integrates real user testimonials for a motivating experience. The site showcases various workouts, including Yoga and Cardio, with interactive elements that enhance user engagement. Smooth animations and a responsive layout ensure an appealing and functional interface.",
     images:gym,
     icon:["html","css"]},
    {title:"To-do List",
      des:"I built a simple and efficient to-do list application using HTML, CSS, and JavaScript. It’s a common beginner project that reinforces understanding of fundamental web development . The app allows users to add, delete, and manage tasks seamlessly, with an user-friendly interface. It helps users stay organized by tracking their tasks in real-time. The design is minimalistic yet functional. This project demonstrates my skills in creating practical web applications with a focus on usability.",
    images:todo,
    icon:["html","css","js"]},
    {title:"Calculator",
      des:"I developed a sleek and interactive calculator using HTML, CSS, and JavaScript, enhanced with Vanilla Tilt for a dynamic 3D hover effect. The calculator offers basic arithmetic operations, providing a smooth user experience with intuitive design. The Vanilla Tilt integration adds a modern touch, making the interface visually engaging. This project showcases my ability to combine functionality with stylish design elements",
    images:calculator,
    icon:["html","css","js"]}];
const line=array.length-1;
return (
    <>
     
      <Profile />
       <Navbar />
       <About />
        <ul>
       {array.map((item,index)=>(<li key={index}><Work cat={item}/>
       </li>))}
       </ul> 

       <Tech />
       <Techicon />
       <Contact />

    </>
  )
}

export default App
