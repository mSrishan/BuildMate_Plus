import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo2.png'
const Navbar = () => {
  return (
    <section className='home1'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt=''/>
        </div>

        <ul className='nav-menu'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>English</li>
        </ul>

        <div className='navbtn'>
          <button className='signbtn'>Sign in</button>
          <button className='joinbtn'>Join</button> 
        </div>
    </div>
    </section>
    
  )
}

export default Navbar
