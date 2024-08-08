import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Projects.css';
import mimg1 from "../Components/Assets/login1.jpg";
import pp1 from "../Components/Assets/pro-p1.jpg";
import pp2 from "../Components/Assets/pro-p2.jpg";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import pp3 from "../Components/Assets/pro-p3.jpg";
import ppmu6 from "../Components/Assets/pro-mu6.jpg";
import pp5 from "../Components/Assets/pro-p5.jpg";
import ppmu4 from "../Components/Assets/pro-mu4.jpg";
import ppmu1 from "../Components/Assets/pro-mu1.jpg";

import pp8 from "../Components/Assets/pro-p8.jpg";
import pp9 from "../Components/Assets/pro-p9.jpg";
import pprs1 from "../Components/Assets/pro-rs1.jpeg";
import pprs2 from "../Components/Assets/pro-rs2.jpeg";
import pprs3 from "../Components/Assets/pro-rs3.jpeg";
import pprs4 from "../Components/Assets/pro-rs4.jpeg";
import pprs5 from "../Components/Assets/pro-rs5.jpeg";
import pprs6 from "../Components/Assets/pro-rs6.jpeg";
import ppmu2 from "../Components/Assets/pro-mu2.jpeg";
import ppmu3 from "../Components/Assets/pro-mu3.jpeg";
import ppmu5 from "../Components/Assets/pro-mu5.jpeg";
import ppof1 from "../Components/Assets/pro-of1.jpeg";
import ppof2 from "../Components/Assets/pro-of2.jpeg";
import ppof3 from "../Components/Assets/pro-of3.jpeg";
import ppof4 from "../Components/Assets/pro-of4.jpeg";
import ppof5 from "../Components/Assets/pro-of5.jpeg";
import ppof6 from "../Components/Assets/pro-of6.jpeg";
import ppwh1 from "../Components/Assets/pro-wh1.jpeg";
import ppwh2 from "../Components/Assets/pro-wh2.jpeg";
import ppwh3 from "../Components/Assets/pro-wh3.jpeg";
import ppwh4 from "../Components/Assets/pro-wh4.jpeg";
import ppwh5 from "../Components/Assets/pro-wh5.jpeg";
import ppwh6 from "../Components/Assets/pro-wh6.jpeg";




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
               <img className='pro-img' src={pp2}/>
               <div className='pro-box'>
                    <p className='pro-date'>April 18, 2024</p>
                    <p className='pro-head'>Serenity Springs Residence</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>73%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>1.0Cr</b></p>
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
               <img className='pro-img' src={pp3}/>
               <div className='pro-box'>
                    <p className='pro-date'>June 22, 2024</p>
                    <p className='pro-head'>Sunset Ridge Chalet</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>67%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>2.1Cr</b></p>
                    <button 
                    className={`pro-md ${activeDetailButton === 2 ? 'active' : ''}`} 
                    onClick={() => handleDetailButtonClick(2)}
                    >
                    More Details
                    </button>
               </div>
               </div>
               <div className='pro-scon1'>
               <img className='pro-img' src={pp5}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 01, 2024</p>
                    <p className='pro-head'>Bluebird Meadow Homestead</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>87%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>1.5Cr</b></p>
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
               <img className='pro-img' src={pp9}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Harmony Hill House</p>
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
               <img className='pro-img' src={pp8}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Willowbrook Cottage</p>
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
               <img className='pro-img' src={ppmu1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Tranquil Haven</p>
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
               <img className='pro-img' src={ppmu2}/>
               <div className='pro-box'>
                    <p className='pro-date'>July 15, 2024</p>
                    <p className='pro-head'>Collective Haven Residences</p>
                    <p className='pro-para'>MVIVO (PVT) Ltd</p>
                    <p className='pro-prog'>Progress: <b>82%</b></p>
                    <p className='pro-est'>Estimation Cost: <b>1.5Cr</b></p>
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
               <img className='pro-img' src={ppmu3}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Community Comfort Homes</p>
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
               <img className='pro-img' src={ppmu4}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Family Retreat Residences</p>
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
               <img className='pro-img' src={ppmu5}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Serene Sanctuaries</p>
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
               <img className='pro-img' src={ppmu6}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Village Green Residences</p>
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
               <img className='pro-img' src={pprs1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Garden Gate Estates</p>
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
               <img className='pro-img' src={pprs2}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Urban Chic Haven</p>
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
               <img className='pro-img' src={pprs3}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Rustic Retreat Boutique</p>
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
               <img className='pro-img' src={pprs4}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Vintage Vogue Emporium</p>
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
               <img className='pro-img' src={pprs5}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Coastal Charm Market</p>
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
               <img className='pro-img' src={pprs6}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Luxe Living Loft</p>
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
               <img className='pro-img' src={ppof1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Modern Minimalist Mart</p>
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
               <img className='pro-img' src={ppof2}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Innovation Station</p>
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
               <img className='pro-img' src={ppof3}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Harmony Hub</p>
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
               <img className='pro-img' src={ppof4}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Serenity Suite</p>
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
               <img className='pro-img' src={ppof5}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Dynamic Den</p>
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
               <img className='pro-img' src={ppof6}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Modern Manor</p>
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
               <img className='pro-img' src={ppwh1}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 07, 2024</p>
                    <p className='pro-head'>Prestige Place</p>
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
               <img className='pro-img' src={ppwh2}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 08, 2024</p>
                    <p className='pro-head'>Industrial Bliss Depot</p>
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
               <img className='pro-img' src={ppwh3}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 09, 2024</p>
                    <p className='pro-head'>Rustic Charm Warehouse</p>
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
               <img className='pro-img' src={ppwh4}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 10, 2024</p>
                    <p className='pro-head'>Vintage Vault Haven</p>
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
               <img className='pro-img' src={ppwh5}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 17, 2024</p>
                    <p className='pro-head'>Contemporary Storage Oasis</p>
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
               <img className='pro-img' src={ppwh6}/>
               <div className='pro-box'>
                    <p className='pro-date'>March 27, 2024</p>
                    <p className='pro-head'>Timeless Treasure Depot</p>
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
