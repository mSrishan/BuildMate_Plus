import React, { useState, useEffect } from "react";
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
    // Assuming email is retrieved from user context or authentication
    const userEmail = "user@example.com"; // replace with actual method to get logged in user's email
    setFormData(prevData => ({ ...prevData, email: userEmail }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/contact', formData);

      setFormData({
        name: "",
        email: formData.email, // retain the user's email
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
        text: 'Error submitting contact form. Please try again later.',
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
        <img src={conta1} alt="Background" />

        <div className="contact-white-container">
          <div className='contact-head'>Let's Connect: <br/>Reach Out and Build Together</div>
          <div className="contact-orange-container">
            <div className="contact-head1">Get In Touch</div>
            <div className="contact-name">Your Name</div>
            <input type="text" className="contact-name-input" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />
            <div className="contact-email">Your Email</div>
            <input type="email" className="contact-email-input" placeholder="Enter Your Email" name="email" value={formData.email} readOnly />
            <div className="contact-subject">Your Subject</div>
            <input type="text" className="contact-subject-input" placeholder="Enter Your Subject" name="subject" value={formData.subject} onChange={handleChange} />
            <div className="contact-message">Your Message</div>
            <textarea className="contact-message-input" placeholder="Enter Your Message" name="message" value={formData.message} onChange={handleChange}></textarea>
            <button className="contact-button" onClick={handleSubmit}>Submit</button>
          </div>

          <div className="contact-white-container2">
            <div className="contact-para">Have a question or need assistance?<br/>Reach out to us! We're here to help you bring<br/>your construction dreams to life.</div>
            <div className="contact-phone">Phone Number</div>
            <div className="contact-phone-result">123-456-7890</div>
            <div className="contact-email2">Email Address</div>
            <div className="contact-email2-result">info@buildmateplus.com</div>
            <div className="contact-address">Address</div>
            <div className="contact-address-result">123 Main Street, City, Country</div>
            <div className="contact-web">Web Address</div>
            <div className="contact-web-result">www.buildmateplus.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
