import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Navbar.css';
import logo from '../Assets/Logo_version2.0.png';

const Navbar = () => {
  return (
    <section className='home1'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt=''/>
        </div>

        <ul className='nav-menu'>
          <li><Link to='/Pages/Home'>Home</Link></li>
          <li><Link to='/Pages/About'>About</Link></li>
          <li><Link to='/Pages/Projects'>Projects</Link></li>
          <li><Link to='/Pages/BlogPage'>Blogs</Link></li>
          <li><Link to='/Pages/Contact'>Contact</Link></li>
          <li>English</li>
        

        <div className='navbtn'>
          <li><Link to="/Pages/login">
            <button className='signbtn'>Sign in</button>
          </Link></li></div>
          <div className='navbtn'>
         <li><Link to="/Pages/signup">
            <button className='joinbtn'>Join</button> 
         </Link></li>
         
        </div></ul>
      </div>
    </section>
  );
}

export default Navbar;
