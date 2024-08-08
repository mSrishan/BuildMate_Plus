import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./PrivacyPolicy.css"

const PrivacyPolicy = () =>{
    
    return(
        <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>
      <h2>Introduction</h2>
      <p>
        Welcome to Buildmate+. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="http://www.buildmateplus.com">www.buildmateplus.com</a> and use our services. By accessing or using our services, you consent to the terms of this Privacy Policy.
      </p>
      <h2>Information We Collect</h2>
      <h3>1. Personal Information</h3>
      <ul>
        <li>When you register on our website, we may collect personal information such as your name, email address, phone number, and address.</li>
        <li>If you choose to add a professional profile, we may collect details about your skills, job history, and average job cost per hour.</li>
      </ul>
      <h3>2. Payment Information</h3>
      <ul>
        <li>When you make a purchase or a payment, we may collect payment details such as your credit card information, billing address, and other payment-related details.</li>
      </ul>
      <h3>3. Usage Data</h3>
      <ul>
        <li>We collect information about your interactions with our website, including your browsing history, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
      </ul>
      <h3>4. Cookies and Tracking Technologies</h3>
      <ul>
        <li>We use cookies and similar tracking technologies to track activity on our website and store certain information. You can control the use of cookies at the individual browser level.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>We use the information we collect in various ways, including:</p>
      <ul>
        <li style={{padding:'1%', textAlign:'justify', fontSize:'15px'}}>To provide, operate, and maintain our services.</li>
        <li style={{padding:'1%', textAlign:'justify', fontSize:'15px'}}>To improve, personalize, and expand our services.</li>
        <li style={{padding:'1%', textAlign:'justify', fontSize:'15px'}}>To understand and analyze how you use our services.</li>
        <li style={{padding:'1%', textAlign:'justify', fontSize:'15px'}}>To develop new products, services, features, and functionalities.</li>
      </ul>
    </div>
    );
};
export default PrivacyPolicy;