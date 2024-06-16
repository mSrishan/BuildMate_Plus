import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Architecture.css';

import Primg from "../Components/Assets/Pim1.jpg";
import prof from "../Components/Assets/prof-pic.jpeg";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const Architecture = () => {
  const [professionTitle, setProfessionTitle] = useState('Architecture');
  const [activeButton, setActiveButton] = useState('Architecture');
  const navigate = useNavigate();

  const handleProfessionChange = (newTitle) => {
    setProfessionTitle(newTitle);
    setActiveButton(newTitle);
  };

  const handleMoreDetailsClick = (profileData) => {
    navigate('/pages/Profile', { state: profileData });
  };

  const profileData = {
    name: "Vishwa Wijesekare",
    profession: professionTitle,
    profileImage: prof,
    ratings: 5.4
  };

  return (
    <div>
      <Navbar />
      <div className='home'>
        <img className='wall1' src={Primg} alt='Background' />
        <div className='arch-content'>
          <h1 className='arch-topic'>Find the Professional <br />For Your Maintenance Needs;</h1>
          <p className='arch-subtopic1'>Streamline your projects, empower your teams, and accelerate decision-making with our construction <br />project management software.</p>
          <button className="button1">GET STARTED</button>
          <p className='arch-subtopic2'>We build, We craft :<br /><span className="larger">Building Dreams Through Construction</span></p>
        </div>
      </div>

      <div>
        <h1 className='arch1'>{professionTitle}</h1>
        <p className='arch2'><span className="highlight">Home / Professionals / </span>{professionTitle}</p>
        <button className="button-search">search</button>
        <h1 className='arch4'>Profession Types</h1>
      </div>

      <div className="container1">
        <button
          className={activeButton === 'Architecture' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Architecture')}
        >
          Architecture
        </button><br />
        <button
          className={activeButton === 'Engineers' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Engineers')}
        >
          Engineers
        </button><br />
        <button
          className={activeButton === 'Project Managers' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Project Managers')}
        >
          Project Managers
        </button><br />
        <button
          className={activeButton === 'Legal Advisors' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Legal Advisors')}
        >
          Legal Advisors
        </button><br />
        <button
          className={activeButton === 'Interior Designers' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Interior Designers')}
        >
          Interior Designers
        </button><br />
        <button
          className={activeButton === 'Landscapers' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Landscapers')}
        >
          Landscapers
        </button><br />
        <button
          className={activeButton === 'Plumbers' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Plumbers')}
        >
          Plumbers
        </button><br />
        <button
          className={activeButton === 'Electricians' ? "button-2 active" : "button2"}
          onClick={() => handleProfessionChange('Electricians')}
        >
          Electricians
        </button>
      </div>

      <div className="vertical-line"></div>

      <div className="container2">
        <table className='archi-tab'>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 3 }).map((_, colIndex) => (
                <td className='profile1' key={colIndex}>
                  <div className='pp-container'>
                    <img className='pp' src={prof} alt='Background' />
                  </div>
                  <h2 className="profile-name">Vishwa Wijesekare</h2>
                  <p className="profile-title">{professionTitle}</p>
                  <p className="profile-exp">Years of experience  :<span className="larger2"> 5yr</span></p>
                  <p className="profile-rate">5.4 k</p>
                  <button className="button3" onClick={() => handleMoreDetailsClick(profileData)}>More Details</button>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Architecture;
