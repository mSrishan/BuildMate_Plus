import React, { useState } from 'react';
import './Home.css';

import homeimg from '../Components/Assets/wall1.jpg';
import ic1 from '../Components/Assets/ic1.png'; 
import Navbar from '../Components/Navbar/Navbar';
import h1 from '../Components/Assets/h1.png';
import h2 from '../Components/Assets/h2.png';
import ic2 from '../Components/Assets/ic2.png';
import pic1 from '../Components/Assets/pic1.jpg';
import { Route } from 'react-router-dom';

const Home = () => {

  const [searchType, setSearchType] = useState('Expert');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement search functionality based on searchType and searchQuery
    console.log(`Searching ${searchType} for: ${searchQuery}`);
  };

  return (
   <>
   <Navbar/>
    <div className='home'>
      <img className='wall' src={homeimg} alt='Background' />
      <div className='content'>
        <h1>Connect, Create, Construct</h1>
        <p>Buildmate+ connects countless dreamers with the perfect <br/>
        team to turn their construction visions into reality.</p>
      </div>
      <img className='ic1' src={ic1} alt='Icon' />
        
        <div className="search-bar-container">
          <div className="switch-bar">
            <div className="switch-buttons">
              <button className={`switch-button-ex ${searchType === 'Expert' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Expert')}>Expert</button>
              <button className={`switch-button-su ${searchType === 'Supplier' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Supplier')}>Supplier</button>
              <button className={`switch-button-ma ${searchType === 'Material' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Material')}>Material</button>
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder={` Search ${searchType.toLowerCase()}`}
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="search-button" onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
        <div className='path'>
        <div className='h1'>
        <img className='h1-img' src={h1} alt='Background' />
        <div className='h1-content'>
        <h1 className='h1-text'>Ready to start building your dream?
            Buildmate+ is here to turn your construction ideas into
             reality every step of the way.</h1>
             <button className='h1-button' onClick={HashChangeEvent}>Build your dream </button>

             </div>
             <div className='h2'>
             <img className='h2-img' src={h2} alt='Background'/>
             <div className='h2-content'>
              <h1 className='h2-text'>
              Find trusted professionals for your maintenance needs with Buildmate+. Browse our network of skilled experts and get your project done right.
              </h1>
              <button className='h2-button' onClick={HashChangeEvent}>Join your dream</button>
             </div>
             </div>

            <div className='det'>
             <div className='details-content'>
              <div className='t1'>
                <h1 className='h-t1'>01+</h1>
                <p className='p-t1'>Years of experience </p>
              </div>
              <div className='t2'>
                <h1 className='h-t2'>100+</h1>
                <p className='p-t2'>Number of professionals </p>
              </div>
              <div className='t3'>
                <h1 className='h-t3'>50+</h1>
                <p className='p-t3'>Number of projects </p>
              </div>
              <div className='t4'>
                <h1 className='h-t4'>250+</h1>
                <p className='p-t4'>Number of suppilers </p>
              </div>
             </div>
             </div>
             <img className='ic2' src={ic2} alt='Icon' />
             <h1 className='wel-h'>Welcome to BuildMate+</h1>
             <p className='wel-p'>Choose BuildMate+ for your construction needs and unlock a world of possibilities. Join our thriving community of builders, designers, and dreamers, and let's build the future together.</p>
             </div>

             <div className="wel1">
             <div className='we-c'>
             <h2 className="we-h">Dream Project Matchmaking</h2>
             <p className="we-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
             </div>
             <div className="wel1">
             <div className='we-c'>
             <h2 className="we-h">Streamlined Communication</h2>
             <p className="we-p">Seamlessly communicate and collaborate with your team or clients, ensuring everyone is on the same page from start to finish.</p>
             </div>
             </div>

             <div className="wel1">
             <div className='we-c'>
             <h2 className="we-h">Seamless 3D Design Integration</h2>
             <p className="we-p">Visualize your dream construction projects with our advanced 3D modeling tools, ensuring your vision comes to life exactly as you imagine.</p>
             </div>
             </div>

             <div className="wel1">
             <div className='we-c'>
             <h2 className="we-h">Transparent Progress Tracking</h2>
             <p className="we-p">Stay updated on your project's progress with real-time tracking and reporting features, giving you peace of mind and control.</p>
             </div>
             </div>

             <div className='re-con'>
             <h1 className='re-h'>We care about our customer experience too </h1>
             <div className="con-1">
             <div className="round-con-1">
             <img src={pic1} alt="Image" />
             </div>
                <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
                <p className='line-re'>______________________________________________</p>
                <p className='re-name'>John Walker</p>
                <p className='re-po'>Architecture</p>
              </div>
              

              <div className='con-2'>
              <div className="round-con-2">
              <img src={pic1} alt="Image" />
              </div>
              <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
              <p className='line-re'>______________________________________________</p>
              <p className='re-name'>John Walker</p>
              <p className='re-po'>Architecture</p>
              </div>

              <div className='con-3'>
              <div className="round-con-3">
              <img src={pic1} alt="Image" />
              </div>
              <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
              <p className='line-re'>______________________________________________</p>
              <p className='re-name'>John Walker</p>
              <p className='re-po'>Architecture</p>
              </div>

            
             </div>    
                    

    </div>
                  
        
      </div>
    </div>
   </>
  );
}

export default Home;
