import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Navbar from '../Components/Navbar/Navbar';
import conta1 from '../Components/Assets/conta1.jpg';
import axios from "axios";
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setFormData(prevData => ({ ...prevData, email: userEmail }));
    }
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/contact', formData);

      setFormData({
        name: "",
        email: formData.email,
        subject: "",
        message: ""
      });
      Swal.fire({
        icon: 'success',
        title: 'Successful!',
        text: 'Your Message Sent Successfully...',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response && error.response.data ? error.response.data.message : 'Error submitting contact form. Please try again later.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <Navbar/>
      <div className="contact-image-container">
        <img className='contact-mimg' src={conta1} alt="Background" />

        <div className="contact-white-container">
          <div className='contact-head'>Let's Connect: <br/><span>Reach Out and Build Together</span></div>
          <div className="contact-container">
            <div className="contact-orange-container">
              <div className="contact-head1">Get In Touch</div>
              <div className="con-0">
                <div className="con-01">
                <div className="contact-name">Your Name</div>
                  <input type="text" className="contact-name-input" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />
                
                </div>
                <div className="con-01">
                  <div className="contact-email">Your Email</div>
                  <input type="email" className="contact-email-input" placeholder="Enter Your Email" name="email" value={formData.email} readOnly />
                </div>
              </div>
              
              <div className="con-01">
                <div className="contact-subject">Your Subject</div>
                <input type="text" className="contact-subject-input" placeholder="Enter Your Subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="con-01">
                <div className="contact-message">Your Message</div>
                <textarea className="contact-message-input" placeholder="Enter Your Message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="con-02">
                <button className="contacts-button" onClick={handleSubmit}>Submit</button>
              </div>
              
            </div>

            <div className="contact-white-container2">
              <div className="contact-para"><span>Have a question or need assistance?</span><br/>Reach out to us! We're here to help you bring your construction dreams to life.</div>
              <div className="contact-information">Phone Number<br/><span>123-456-7890</span></div>
              <div className="contact-information">Email Address<br/><span>buildmateplus@gmail.com</span></div>
              <div className="contact-information">Address<br/><span>123 Main Street, City, Country</span></div>
              <div className="contact-information">Web Address<br/><span>www.buildmateplus.com</span></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
