import React, { useState } from 'react';
import './Home.css';
import Registration from './Registration';
import CountUp from 'react-countup';
import homeimg from '../Components/Assets/wall1.jpg';
import ic1 from '../Components/Assets/ic1.png'; 
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import ic2 from '../Components/Assets/ic2.png';
import profile from '../Components/Assets/profile.png';
import seemore from '../Components/Assets/down-arrow.png'
import dreamimage from '../Components/Assets/1638943222107.jpeg'
import oppertunityimg from '../Components/Assets/construction-company-names.jpg'
import growthImage from '../Components/Assets/growth.png';
import groupImage from '../Components/Assets/group.png';
import propertyImage from '../Components/Assets/property.png';
import starImage from '../Components/Assets/star.png';
import viewImage from '../Components/Assets/3d-view(1).png';

import ScrollTrigger from "react-scroll-trigger";
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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

  const [counterOn, setCounterOn] = useState(false);
  const pathWindow = () => {
    // Scroll to the target element
    const element = document.getElementById('firstbox');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
   <>
   
    <div className='homepage'>
      <Navbar/>
      <img className='wall' src={homeimg} alt='Background' />
      <div className='content'>
        <h1>Connect, Create, Construct</h1>
        <p>Buildmate+ connects countless dreamers with the perfect <br/>
        team to turn their construction visions into reality.</p>
        
      
        <img className='ic1' src={ic1} alt='Icon' />
        <div className='search-center'>
          <div className="search-bar-container">
            
              <div className="switch-buttons">
                <button className={`switch-button-ex ${searchType === 'Expert' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Expert')}>Expert</button>
                <button className={`switch-button-su ${searchType === 'Supplier' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Supplier')}>Supplier</button>
                <button className={`switch-button-ma ${searchType === 'Material' ? 'active' : ''}`} onClick={() => handleSearchTypeChange('Material')}>Material</button>
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
          <div className='arrow'>
            <img
             className='downarrow' src={seemore} alt='downarrow'
             onClick={pathWindow}
            /></div>
      </div>
        <div className='path'>
                      <div className='h1'>
                       <div className='firstbox'id='firstbox'>
                          <div className='box1'>
                            <img src={dreamimage} className='dreamimg'/>
                            <div className='box'><h1 className='h1-text'>Ready to start building your dream or maintaining your existing construction? 
                            </h1><button className='h1-button' onClick={HashChangeEvent}>Build your dream </button></div>
                          </div>
                          <div className='box2'>
                            <img
                              src={oppertunityimg}
                              className='dreamimg'
                              style={{ transform: 'scaleX(-1)', zIndex: '-1', borderRadius: '0 65px 65px 0' }}
                            />
                            <div className='box'>
                              <h1 className='h2-text' style={{ transform: 'scaleX(-1)' }}>
                                Ready to take on new projects or find exciting job opportunities in the construction industry?
                              </h1>
                              <button
                                className='h2-button'
                                onClick={() => navigate('/Pages/registration')}
                                style={{ transform: 'scaleX(-1)' }}
                              >
                                Explore Opportunities
                              </button>
                            </div>
                          </div>
                      </div> 
                      <div className='det'>
                          <div className='details-content'>
                           
                            <div className='t1'><ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                              <h1 className='h-t1'>{counterOn &&  <CountUp start={0} end={1} duration={2} delay={0}/>}+</h1>
                              <p className='p-t1'>Years of experience </p></ScrollTrigger> 
                            </div>
                            <div className='t1'><ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                              <h1 className='h-t1'>{counterOn &&  <CountUp start={0} end={200} duration={2} delay={0}/>}+</h1>
                              <p className='p-t1'>Number of professionals </p></ScrollTrigger> 
                            </div>
                            <div className='t1'><ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                              <h1 className='h-t1'>{counterOn &&  <CountUp start={0} end={50} duration={2} delay={0}/>}+</h1>
                              <p className='p-t1'>Number of projects </p></ScrollTrigger> 
                            </div>
                            <div className='t1'><ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                              <h1 className='h-t1'>{counterOn &&  <CountUp start={0} end={250} duration={2} delay={0}/>}+</h1>
                              <p className='p-t1'>Number of suppilers </p></ScrollTrigger> 
                            </div>
                          </div>
                    </div>
                          <img className='ic2' src={ic2} alt='Icon' />
                        <div className='wel-all' >
                          <h1 className='wel-h'>Welcome to BuildMate+</h1>
                          <p className='wel-p'>Choose BuildMate+ for your construction needs and unlock a world of possibilities. Join our thriving community of builders, designers, and dreamers, and let's build the future together.</p>
                          </div>
                      </div>

                          <div className="wel1">
                            <div className='we-c'>
                              <img src={propertyImage} alt='property' className='wel-img'/>
                            <h2 className="we-h">Dream Project Matchmaking</h2>
                            <p className="we-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                            </div>
                            <div className='we-c'>
                              <img src={groupImage} alt='group'className='wel-img'/>
                            <h2 className="we-h">Streamlined Communication</h2>
                            <p className="we-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero</p>
                            </div>
                           
                              
                            <div className='we-c'><img src={viewImage} alt='view'className='wel-img'/>
                            <h2 className="we-h">Seamless 3D Design Integration</h2>
                            <p className="we-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero</p>
                            </div>

                            <div className='we-c'>
                              <img src={growthImage} alt='growth'className='wel-img'/>
                            <h2 className="we-h">Transparent Progress Tracking</h2>
                            <p className="we-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero</p>
                            </div>
                          </div>

                          <div className='re-con'>
                            <h1 className='re-h'>We care about our customer<br/> experience too </h1>
                            <div className='review-con'>

                            <div className="con-1">
                              <img src={profile} alt="Image" className='profile-img' style={{width:'70px'}} />
                              <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
                              <div className='line-re'></div>
                              <div className='footer-con'>
                                <div className='position'>
                              <p className='re-name'>John Walker</p>
                              <p className='re-po'>Architecture</p></div>
                              <div className='review-star'>
                                <img src={starImage} alt='star' className='star' style={{width:'15px', filter: 'grayscale(100%)'}}/>
                                <img src={starImage} alt='star' className='star' style={{width:'15px'}}/>
                                <img src={starImage} alt='star' className='star' style={{width:'15px'}}/>
                                <img src={starImage} alt='star' className='star' style={{width:'15px'}}/>
                                <img src={starImage} alt='star' className='star' style={{width:'15px'}}/>
                              </div>
                              </div>
                            </div>
                            

                            <div className='con-1'>
                            <img src={profile} alt="Image" style={{width:'70px'}} className='profile-img'/>
                            <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
                            <div className='line-re'></div>
                            <p className='re-name'>John Walker</p>
                            <p className='re-po'>Architecture</p>
                            </div>

                            <div className='con-1'>
                            <img src={profile} alt="Image" style={{width:'70px'}} className='profile-img'/>
                            <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed.</p>
                            <div className='line-re'></div>
                            <p className='re-name'>John Walker</p>
                            <p className='re-po'>Architecture</p>
                            </div>

                          </div>
                          </div>    
                          <Footer/>     

                  
                                
                      
      </div>
    </div>
   </>
  );
}

export default Home;
