import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Logo_version2.0.png';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const storedFirstName = localStorage.getItem('firstName');

    if (userEmail && storedFirstName) {
      setIsAuthenticated(true);
      setFirstName(storedFirstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('firstName');
    setIsAuthenticated(false);
    setFirstName('');
    window.location.reload();
  };

  return (
    <section className='home1'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='Logo' />
        </div>

        <ul className='nav-menu'>
          <li><Link to="/Pages/home">Home</Link></li>
          <li><Link to="/Pages/about">About</Link></li>
          <li><Link to="/Pages/projects">Projects</Link></li>
          <li><Link to="/Pages/BlogPage">Blogs</Link></li>
          <li><Link to="/Pages/contact">Contact</Link></li>

          {isAuthenticated ? (
            <div className='navbtn'>
              <li><span>Hi, {firstName}</span></li>
              <li>
                <button className='signbtn' style={{ border: 'none' }} onClick={handleLogout}>Logout</button>
              </li>
            </div>
          ) : (
            <>
              <div className='navbtn'>
                <li><Link to="/Pages/login">
                  <button className='signbtn' style={{ border: 'none' }}>Sign in</button>
                </Link></li>
              </div>
              <div className='navbtn'>
                <li><Link to="/Pages/signup">
                  <button className='joinbtn'>Join</button>
                </Link></li>
              </div>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
