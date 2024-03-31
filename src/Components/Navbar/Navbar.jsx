import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Navbar.css';
import logo from '../Assets/logo2.png';

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
          <Link to="/login">
            <button className='signbtn'>Sign in</button>
          </Link>
          <button className='joinbtn'>Join</button> 
        </div>
      </div>
    </section>
  );
}

export default Navbar;
