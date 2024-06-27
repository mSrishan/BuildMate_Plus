import React, { useState, useRef } from 'react';
import './Projects.css';
import mimg1 from "../Components/Assets/login1.jpg";
import pp1 from "../Components/Assets/pro-p1.jpg";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const Projects = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [buttonText, setButtonText] = useState('');
  const [activeDetailButton, setActiveDetailButton] = useState(null);

  const scrollRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleButtonClick = (buttonIndex, text) => {
    setActiveButton(buttonIndex);
    setButtonText(text);
    scrollRefs[buttonIndex].current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDetailButtonClick = (buttonIndex) => {
    setActiveDetailButton(buttonIndex);
  };

 

  return (
    <div style={{position: 'relative'}}>
      <Navbar/>
      <img className='pro-mimg' src={mimg1} alt='Background'/>
      <div className='pro-content'>
        <h1 className='pro-topic'>Projects</h1>
        <p className='pro-subtopic'>We build, We craft :<br/>Building Dreams Through Construction</p>
      </div>
      <div className='pro-body01'>
        <div className='pro-st1'>Ongoing Projects</div>
        <div className='pro-line'></div>
        <div className='pro-tline'>{buttonText}</div>
        <div className='pro-line'></div>
      </div>
      <div className='pro-body02'>
        <div className='pro-Subbody01'>
          <div className='pro-fil'>Filters</div>
          <div className='pro-sea'>search</div>   
        </div>
        <div className='pro-body03'>
        <div className='pro-Subbody02'>
            <div className='pro-st2'>Project Types</div>

            <button
              className={`pro-con1-t1 ${activeButton === 1 ? 'active' : ''}`}
              onClick={() => handleButtonClick(1, 'Single Family Homes')}
            >
              Single Family Homes
            </button>
            <br/>

            <button
              className={`pro-con1-t1 ${activeButton === 2 ? 'active' : ''}`}
              onClick={() => handleButtonClick(2, 'Multi-Unit Dwellings')}
            >
              Multi-Unit Dwellings
            </button>
            <br/>

            <button
              className={`pro-con1-t1 ${activeButton === 3 ? 'active' : ''}`}
              onClick={() => handleButtonClick(3, 'Retail Spaces')}
            >
              Retail Spaces
            </button>
            <br/>

            <button
              className={`pro-con1-t1 ${activeButton === 4 ? 'active' : ''}`}
              onClick={() => handleButtonClick(4, 'Office Spaces')}
            >
              Office Spaces
            </button>
            <br/>

            <button
              className={`pro-con1-t1 ${activeButton === 5 ? 'active' : ''}`}
              onClick={() => handleButtonClick(5, 'Warehouses')}
            >
              Warehouses
            </button>

          </div>
          <div className='pro-event01'>
          <div className='pro-event' ref={scrollRefs[1]}>
             <div className='pro-Subbody04'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 0 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(0)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 1 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(1)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 3 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(3)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 4 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(4)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 5 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(5)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>  
               
          </div>

          <div className='pro-event' ref={scrollRefs[2]}>
             <div className='pro-Subbody04'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 0 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(0)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 1 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(1)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 3 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(3)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 4 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(4)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 5 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(5)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>  
               
          </div>
          
          <div className='pro-event' ref={scrollRefs[3]}>
             <div className='pro-Subbody04'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 0 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(0)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 1 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(1)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 3 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(3)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 4 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(4)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 5 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(5)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>  
               
          </div>

          <div className='pro-event' ref={scrollRefs[4]}>
             <div className='pro-Subbody04'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 0 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(0)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 1 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(1)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 3 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(3)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 4 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(4)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 5 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(5)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>  
               
          </div>

          <div className='pro-event' ref={scrollRefs[5]}>
             <div className='pro-Subbody04'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 0 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(0)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 1 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(1)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 3 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(3)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>
               <div className='pro-Subbody05'>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 4 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(4)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Farmhouse Dream</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>70%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 5 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(5)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               </div>  
               
          </div>







          </div>
               


        </div>
        
      </div>
      <button className='pro-sm'>see more</button>
      <Footer/>  
    </div>
  );
};

export default Projects;
