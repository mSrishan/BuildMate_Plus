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
          <li><Link to="/Pages/home">Home</Link></li>
          <li><Link to="/Pages/about">About</Link></li>
          <li><Link to="/Pages/projects">Projects</Link></li>
          <li><Link to="/Pages/blogs">Blogs</Link></li>
          <li><Link to="/Pages/contact">Contact</Link></li>
          <li><Link to="/english">English</Link></li>
        </ul>

        <div className='navbtn'>
          <Link to="/Pages/login">
            <button className='signbtn'>Sign in</button>
          </Link>

         <Link to="/Pages/signup">
            <button className='joinbtn'>Join</button> 
         </Link>
         
        </div>
      </div>
    </section>
  );
}

export default Navbar;
