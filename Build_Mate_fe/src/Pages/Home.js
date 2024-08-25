import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import CountUp from 'react-countup';
import homeimg from '../Components/Assets/wall1.jpg';
import ic1 from '../Components/Assets/ic1.png'; 
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import women from '../Components/Assets/Home-women.png';
import seemore from '../Components/Assets/down-arrow.png';
import dreamimage from '../Components/Assets/1638943222107.jpeg';
import oppertunityimg from '../Components/Assets/construction-company-names.jpg';
import growthImage from '../Components/Assets/growth.png';
import groupImage from '../Components/Assets/group.png';
import propertyImage from '../Components/Assets/property.png';
import starImage from '../Components/Assets/star.png';
import viewImage from '../Components/Assets/3d-view(1).png';
import reviewImg01 from "../Components/Assets/review01.jpeg";
import reviewImg02 from "../Components/Assets/review02.jpeg";
import reviewImg03 from "../Components/Assets/review03.jpeg";
import boxImg01 from "../Components/Assets/BoxImg01.png"
import boxImg02 from "../Components/Assets/BoxImg02.png";
import boxImg03 from "../Components/Assets/BoxImg03.png"
import 'animate.css';
import SearchBar from '../Components/Searchbar/SearchBar';
import AdSidebar from '../Components/AdSidebar/AdSidebar';

import ScrollTrigger from "react-scroll-trigger";
import { Link } from 'react-router-dom';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={starImage}
        alt="star"
        className="star"
        style={{
          width: '15px',
          filter: i <= rating ? 'none' : 'grayscale(100%)',
        }}
      />
    );
  }
  return stars;
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [counterOn, setCounterOn] = useState(false);

  const fadeInRef = useRef(null);
  const backInRightRef = useRef(null);
  const fadeInLeftRef = useRef(null);

  // Function to scroll to the target element
  const pathWindow = () => {
    const element = document.getElementById('firstbox');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (backInRightRef.current) {
      backInRightRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        backInRightRef.current.classList.add('animate__backInRightVisible');
      }, 300);
    }
    if (fadeInLeftRef.current) {
      fadeInLeftRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        fadeInLeftRef.current.classList.add('animate__fadeInLeftVisible');
      }, 300);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('leFadeIn')) {
              entry.target.classList.add('leFadeInVisible');
            } else if (entry.target.classList.contains('animate__backInRight')) {
              entry.target.classList.add('animate__backInRightVisible');
            } else if (entry.target.classList.contains('animate__fadeInLeft')) {
              entry.target.classList.add('animate__fadeInLeftVisible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }
    if (backInRightRef.current) {
      observer.observe(backInRightRef.current);
    }
    if (fadeInLeftRef.current) {
      observer.observe(fadeInLeftRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        observer.unobserve(fadeInRef.current);
      }
      if (backInRightRef.current) {
        observer.unobserve(backInRightRef.current);
      }
      if (fadeInLeftRef.current) {
        observer.unobserve(fadeInLeftRef.current);
      }
    };
  }, []);

  if (loading) {
    return <div class="loader-container">
    <div class="progress-bar">
        <div class="progress"></div>
    </div>
</div>;
  }

  return (
    <>
      <div className='homepage'>
        <Navbar />
        <AdSidebar />
        <img className='wall' src={homeimg} alt='Background' />
        <div className='head-content'>
          <img src={ic1} alt='icon one' className='ic1' />
          <div className='content'>
            <div className='home-content-1'>
              <h1></h1>
              <div className='animate__fadeInUp' ref={fadeInRef}>
                <p>Buildmate+ connects countless dreamers with the perfect team to turn their construction visions into reality.</p>
              </div>
            </div>
            <SearchBar />
            <div className='arrow'>
              <img
                className='downarrow' src={seemore} alt='downarrow'
                onClick={pathWindow}
              />
            </div>
          </div>
        </div>
        <div className='path'>
          <div className='h1'>
          <div className='firstbox'id='firstbox'>
                        <div className='boxCollection1'>
                          <div className='animate_box1 animate__animated animate__fadeInLeft' ref={fadeInLeftRef}>
                            <div className='box1'>
                              <img src={boxImg01} className='boxImg01' alt=' '/>
                              <div className='box'>
                                  <h3 className='h1-text'>
                                  Register to join the BuildMate+ community and start your construction journey
                                  </h3>
                                  <Link to='/Pages/Registration'>

                                      <button className='h1-button'>Be a BuildMate</button>
                                  </Link>
                              </div>
                              </div>
                          </div>
                          <div className='animate_box1 animate__animated animate__fadeInLeft' ref={fadeInLeftRef}>
                            <div className='box1'>
                              
                              <div className='box-Right'>
                                  <h3 className='h1-text-Right'>
                                  Create your perfect team of professionals, materials, and service suppliers for your project.
                                  </h3>
                                  <Link to='/Pages/connect'>
                                      <button className='h1-button-Right'>Build your team</button>
                                  </Link>
                              </div>
                              <img src={women} className='boxImg01' alt=' '/>
                              </div>
                          </div>
                        </div>
                        <div className='boxCollection1' style={{marginTop:'5%'}}>

                          <div className='animate_box1 animate__animated animate__fadeInLeft' ref={fadeInLeftRef}>
                            <div className='box1'>
                              <img src={boxImg02} className='boxImg01' alt=' '/>
                              <div className='box'>
                                  <h3 className='h1-text'>
                                  Explore ongoing industry projects and stay updated on the latest construction trends.
                                  </h3>
                                  <Link to='/Pages/Projects'>
                                      <button className='h1-button'>Project Explorer</button>
                                  </Link>
                              </div>
                              </div>
                          </div>
                          <div className='animate_box1 animate_animated animate_fadeInLeft' ref={fadeInLeftRef}>
                            <div className='box1'>
                              
                              <div className='box-Right'>
                                  <h3 className='h1-text-Right'>
                                  Use AI to generate and visualize your dream construction project.
                                  </h3>
                                  <Link to='/Pages/ImageGeneration'>
                                      <button className='h1-button-Right'>Build your dream</button>
                                  </Link>
                              </div>
                              <img src={boxImg03} className='boxImg01' alt=' '/>
                              </div>
                          </div>
                        </div>
                        
                    
                          
                 </div> 

            <div className='det'>
              <div className='details-content'>
                <div className='t1'>
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 className='h-t1'>{counterOn && <CountUp start={0} end={1} duration={2} delay={0} />}+</h1>
                    <p className='p-t1'>Years of experience </p></ScrollTrigger>
                </div>
                <div className='t1'>
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 className='h-t1'>{counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+</h1>
                    <p className='p-t1'>Number of professionals </p></ScrollTrigger>
                </div>
                <div className='t1'>
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 className='h-t1'>{counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
                    <p className='p-t1'>Number of projects </p></ScrollTrigger>
                </div>
                <div className='t1'>
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 className='h-t1'>{counterOn && <CountUp start={0} end={250} duration={2} delay={0} />}+</h1>
                    <p className='p-t1'>Number of suppliers </p></ScrollTrigger>
                </div>
              </div>
            </div>
          </div>
          <div className='sub-head-content'>
            <img src={women} alt='woman' className='woman-img' />
            <div className='wel-all-collection'>
              <div className='wel-all'>
                <h1 className='wel-h'>Welcome to BuildMate+</h1>
                <p className='wel-p'>Choose BuildMate+ for your construction needs and unlock a world of possibilities. Join our thriving community of builders, designers, and dreamers, and let's build the future together.</p>
              </div>
              <div className="wel1">
                <div className='we-c'>
                  <img src={propertyImage} alt='property' className='wel-img' />
                  <h2 className="we-h">Dream Project Matchmaking</h2>
                  <p className="we-p">Connects clients with projects that perfectly align with their vision and requirements, ensuring satisfaction from start to finish.</p>
                </div>
                <div className='we-c'>
                  <img src={groupImage} alt='group' className='wel-img' />
                  <h2 className="we-h">Streamlined Communication</h2>
                  <p className="we-p">Facilitates efficient and effective communication among all stakeholders, reducing misunderstandings and enhancing collaboration.</p>
                </div>
                <div className='we-c'>
                  <img src={viewImage} alt='view' className='wel-img' />
                  <h2 className="we-h">Seamless 3D Design Integration</h2>
                  <p className="we-p">Enables easy creation and integration of 3D designs, improving project visualization and planning accuracy.</p>
                </div>
                <div className='we-c'>
                  <img src={growthImage} alt='growth' className='wel-img' />
                  <h2 className="we-h">Transparent Progress Tracking</h2>
                  <p className="we-p">Provides real-time updates on project progress, ensuring transparency and building trust with clients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='re-con'>
            <h1 className='re-h'>We care about our customer<br /> experience too </h1>
            <div className='review-con'>
              <div className="con-1">
                <img src={reviewImg01} alt="Profile" className="profile-img" style={{ width: '70px' }} />
                <p className="re">
                  "BuildMate+ has significantly improved our project coordination and execution. The Dream Project Matchmaking feature is fantastic for finding projects that fit our expertise. Streamlined communication has reduced the back-and-forth between team members, making our workflow more efficient. The 3D Design Integration allows us to present detailed plans to clients, enhancing their understanding and satisfaction. Overall, BuildMate+ has been an invaluable tool for our firm."
                </p>
                <div className="line-re"></div>
                <div className="footer-con">
                  <div className="position">
                    <p className='re-name'>Sophia Williams</p>
                    <p className='re-po'>Architect</p>
                  </div>
                  <div className="reviewStar">{renderStars(4)}</div>
                </div>
              </div>
              <div className='con-1'>
                <img src={reviewImg02} alt="Image" style={{ width: '70px' }} className='profile-img' />
                <p className='re'>"BuildMate+ has greatly improved our project management process. The intuitive 3D Design Integration allows for easy creation and modification of designs, enhancing client presentations. The streamlined communication features ensure our team stays informed, reducing errors. Highly recommend BuildMate+ for engineering teams aiming to boost efficiency and collaboration."</p>
                <div className='line-re'></div>
                <div className="footer-con">
                  <div className="position">
                    <p className="re-name">John Walker</p>
                    <p className="re-po">Architecture</p>
                  </div>
                  <div className="reviewStar">{renderStars(3)}</div>
                </div>
              </div>
              <div className='con-1'>
                <img src={reviewImg03} alt="Image" style={{ width: '70px' }} className='profile-img' />
                <p className='re'>"The BuildMate+ platform has revolutionized our project management approach. The seamless integration of 3D designs has made it easier to visualize and plan our projects. The streamlined communication tools ensure that everyone is on the same page, minimizing errors and delays. The transparent progress tracking feature is a favorite among our clients, as it provides real-time updates and fosters trust. I can't imagine managing our projects without BuildMate+."</p>
                <div className='line-re'></div>
                <div className="footer-con">
                  <div className="position">
                    <p className='re-name'>James Anderson</p>
                    <p className='re-po'>Project Manager</p>
                  </div>
                  <div className="reviewStar">{renderStars(5)}</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
