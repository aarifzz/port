import React from 'react'
import './profile.css'
import bg from './assets/bg1.png'
function Profile() {
  return (
    <>

    <div className='container' id='home'>
      <h1 className='fd'>FRONTEND DEVELOPER</h1>
      <h1 className='fd2'>FRONTEND DEVELOPER</h1>
      <h1 className='fd3'>FRONTEND DEVELOPER</h1> 
      <img src={bg} className='bg' />
      <h4 style={{ fontFamily: 'smallfont'}}  className='q1'>What makes my front-end development<br></br>stand out is the fusion of technical<br></br> precision with a creative flair</h4>
      <h4 className='q2'>Dive into a world where every line of code<br></br>crafts a seamless experience, transforming<br></br>the ordinary into the extraordinary</h4>
     </div>



    </>
  )
}

export default Profile