import React, { useState } from 'react';
import './Connect.css'

import c1 from '../Components/Assets/back12.png';
import Navbar from '../Components/Navbar/Navbar';
export default function Connect() {
  return (
    <div>

    <Navbar/>
      <div className="image-container">
      <img src={c1} alt="Background" />
      <div className="white-container">
      <div className='head'>BUILD YOUR DREAM</div>
      <p className='para'>From concept to completion, Buildmate+ helps you bring your construction dreams to life. Whether you're starting a new project or maintaining an existing one, our platform empowers you to create, collaborate, and construct with confidence.</p>
      <div className="orange-container1">
        <div className='para1'>Share your dream <br/> construction project with us</div>
        <button className='button1'>Your Construction Idea</button>
        <div className='sen1'>More Details</div>
      </div>
      <div className="orange-container2">
        <div className='para1'>Find the Professional<br/>for Your Maintenance Needs</div>
        <button className='button1'>For Your Maintenance</button>
        <div className='sen1'>More Details</div>
      </div>
      
      </div>
      
    </div>
    </div>
  )
}
