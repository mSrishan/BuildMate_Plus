import React, { useState } from 'react';
import './Home.css';

import homeimg from '../Components/Assets/wall1.jpg';
import ic1 from '../Components/Assets/ic1.png'; 

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
              <button className={`switch-button ${searchType === 'Expert' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Expert')}>Expert</button>
              <button className={`switch-button ${searchType === 'Supplier' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Supplier')}>Supplier</button>
              <button className={`switch-button ${searchType === 'Material' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Material')}>Material</button>
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

    </div>
  );
}

export default Home;
