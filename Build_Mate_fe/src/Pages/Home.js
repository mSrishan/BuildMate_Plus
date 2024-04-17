import React, { useState } from 'react';
import './Home.css';

import homeimg from '../Components/Assets/wall1.jpg';
import ic1 from '../Components/Assets/ic1.png'; 
import Navbar from '../Components/Navbar/Navbar';
import h1 from '../Components/Assets/h1.png';
import h2 from '../Components/Assets/h2.png';
import ic2 from '../Components/Assets/ic2.png'

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
                  
        
      </div>
    </div>
   </>
  );
}

export default Home;
