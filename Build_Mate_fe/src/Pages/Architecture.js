import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Architecture.css';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const Architecture = () => {
  const [professionTitle, setProfessionTitle] = useState('Architecture');
  const [activeButton, setActiveButton] = useState('Architecture');
  const [professionals, setProfessionals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/professionalDetails?profession=${professionTitle}`);
        setProfessionals(response.data);
      } catch (error) {
        console.error('Error fetching professionals:', error);
      }
    };

    fetchProfessionals();
  }, [professionTitle]);

  const handleProfessionChange = (newTitle) => {
    setProfessionTitle(newTitle);
    setActiveButton(newTitle);
  };

  const handleMoreDetailsClick = (id) => {
    navigate('/pages/Profile', { state: { id } });
  };

  return (
    <div>
      <Navbar />
      <div className='home'>
        {/* Background image and content */}
      </div>

      <div>
        <h1 className='arch1'>{professionTitle}</h1>
        <p className='arch2'><span className="highlight">Home / Professionals / </span>{professionTitle}</p>
        <button className="button-search">Search</button>
        <h1 className='arch4'>Profession Types</h1>
      </div>

      <div className="container1">
        {['Architecture', 'Engineers', 'Project Managers', 'Legal Advisors', 'Interior Designers', 'Landscapers', 'Plumbers', 'Electricians'].map((profession) => (
          <button
            key={profession}
            className={activeButton === profession ? "button-2 active" : "button2"}
            onClick={() => handleProfessionChange(profession)}
          >
            {profession}
          </button>
        ))}
      </div>

      <div className="vertical-line"></div>

      <div className="container2">
        <table className='archi-tab'>
          {professionals.map((professional, index) => (
            <tr key={index}>
              <td className='profile1'>
                <div className='pp-container'>
                  <img className='pp' src={professional.profilePicture ? `http://localhost:8000/${professional.profilePicture}` : 'https://via.placeholder.com/150'} alt={professional.name} />
                </div>
                <h2 className="profile-name">{professional.name}</h2>
                <p className="profile-title">{professional.profession}</p>
                <p className="profile-exp">Years of experience  :<span className="larger2"> {professional.experience} yr</span></p>
                <p className="profile-rate">{professional.ratings}</p>
                <button className="button3" onClick={() => handleMoreDetailsClick(professional._id)}>More Details</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Architecture;
