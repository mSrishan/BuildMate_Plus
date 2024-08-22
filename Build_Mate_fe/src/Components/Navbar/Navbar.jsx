import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Logo_version2.0.png';

const Navbar = () => {
  const navigate = useNavigate();

  function handlenavigate(){
    navigate("../../Pages/ProfilePage")
  }
  
  function handleHomeBack() {
    navigate("../../Pages/Home"); // Correct path for your route
  }

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
    sessionStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setFirstName('');
    window.location.reload();
  };

  return (
    <section className='home1'>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='Logo' onClick={handleHomeBack} style={{ cursor: 'pointer' }} />
        </div>

        <ul className='nav-menu'>
          <li><NavLink to="/Pages/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/Pages/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/Pages/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/Pages/BlogPage" activeClassName="active">Blogs</NavLink></li>
          <li><NavLink to="/Pages/contact" activeClassName="active">Contact</NavLink></li>

          {isAuthenticated ? (
            <div className='navbtn'>
              <li><span onClick={handlenavigate}>Hi, {firstName} </span>
                <button className='signbtn' style={{ border: 'none' }} onClick={handleLogout}>Logout</button>
              </li>
            </div>
          ) : (
            <>
              <div className='navbtn'>
                <li><NavLink to="/Pages/login">
                  <button className='signbtn' style={{ border: 'none' }}>Sign in</button>
                </NavLink></li>
              </div>
              <div className='navbtn'>
                <li><NavLink to="/Pages/signup">
                  <button className='joinbtn'>Join</button>
                </NavLink></li>
              </div>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
