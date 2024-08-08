import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Connect.css';

import c1 from '../Components/Assets/Architecture-1.jpg';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Connect() {
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    console.log(token !== '1234');

    if (token !== '1234') {
      Swal.fire({
        icon: 'warning',
        title: 'Access denied',
        
        footer: "You have to log in first",
        confirmButtonText: 'OK'
    });
      navigate('/Pages/home');
    }
  }, [navigate]);
    

  

  return (
    <div>
      <Navbar />
      <div className="contact-image-container">
        <img className='connect-img'src={c1} alt="Background" />
        <div className="contact-white-container" style={{padding:'5%'}}>
          <div className='contact-head'>BUILD YOUR DREAM</div>
          <p className='para'>
            From concept to completion, Buildmate+ helps you bring your construction dreams to life. Whether you're starting a new project or maintaining an existing one, our platform empowers you to create, collaborate, and construct with confidence.
          </p>
          <div className='orange-container'>
            <div className="orange-container1">
              <div className='para1'>Find professionals For your construction</div>
              <div className="connect-02">
                <button className="con-button" onClick={() => window.location.href = '/Pages/ProfileCards'}>
                Find Professionals
              </button>
              </div>
              <div className='sen1'>More Details</div>
            </div>
            <div className="orange-container1">
              <div className='para1'>Find the Service Suppliers for Your Construction</div>
              <div className="connect-02">
                <button className="con-button" onClick={() => window.location.href = '/Pages/Profiless'}>
                Find Service Suppliers
              </button>
              </div>
              <div className='sen1'>More Details</div>
            </div>
            <div className="orange-container1">
              <div className='para1'>Find the Material Suppliers for Your Construction</div>
              <div className="connect-02">
                <button className="con-button" onClick={() => window.location.href = '/Pages/Profilems'}>
                Find Material Suppliers
              </button>
              </div>
              <div className='sen1'>More Details</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
