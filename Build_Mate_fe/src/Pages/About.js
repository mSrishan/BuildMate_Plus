import React from 'react'
import './About.css'
import Footer from '../Components/Footer/footer';
import abimg from "../Components/Assets/Abh.jpg"
import aboutimg from "../Components/Assets/About.jpg"
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>

        <Navbar/>
      <div className='home'>
           <img className='wall1' src={abimg} alt='Background' />
           <div className='ab-content'>
             <h1 className='ab-topic'>About Us</h1>
             <p className='ab-subtopic'>Crafting Dreams, Building Futures:<br/><span class="larger">Discover Our Story at Buildmate+</span></p>
            </div>
         </div>
         <h1 className='ab-q'>What is BuildMate+ ?</h1>
         <img className='about' src={aboutimg} alt='Pic' />
         <div className='ab-p-group'>
          <div className='ab-p1'>Buildmate+ represents the pinnacle of construction management platforms, offering a comprehensive suite of advanced tools and features tailored to the evolving needs of the industry. With its robust project management capabilities, including intricate Gantt charts, critical path analysis, and resource allocation tools, Buildmate+ empowers project managers to plan, execute, and monitor construction projects with unparalleled precision and efficiency. Moreover, its enhanced collaboration capabilities enable seamless communication and coordination among project teams and stakeholders, fostering a culture of teamwork and transparency throughout the project lifecycle. By integrating seamlessly with other construction-related software and systems, Buildmate+ ensures smooth data at the </div>
         <div className='ab-p2'>heart Buildmate+ lies its commitment to empowering construction professionals with actionable insights and analytics-driven decision-making. Through its advanced analytics and reporting features, users can generate custom reports, track key performance indicators, and uncover valuable insights into project progress, performance, and trends. With Buildmate+, construction professionals can make informed decisions, identify areas for improvement, and drive continuous innovation in their projects. By leveraging the power of data-driven insights, Buildmate+ not only enhances project outcomes but also lays the foundation for a more sustainable and resilient construction industry, poised to meet the challenges of tomorrow head-on.</div>
    
         </div>
        <div className='aboutBox'>
        <h1 className='vision'>VISION</h1>
        <div className='vis'>"To revolutionize the construction industry by empowering stakeholders through innovative technologies and collaborative platforms, fostering sustainable practices, and driving efficiency at every stage of the construction process."</div>

        </div> 
        
        <div className='aboutBox'>
        <h1 className='mission'>MISSION</h1>
        <div className='mis'>"Our mission is to provide a comprehensive online platform that facilitates seamless collaboration, knowledge sharing, and resource optimization within the construction industry. We aim to empower contractors, architects, engineers, suppliers, and other stakeholders by offering cutting-edge tools, insightful resources, and a vibrant community for networking and learning."</div>
        </div>
        <p className='last'>Discover Our Ongoing and Completed </p>
        <p className='last2'>Projects : <span class="highlight"><Link to="/Pages/Projects">Watch Out</Link></span></p>
        <Footer/>   
  </div>
  )
}

