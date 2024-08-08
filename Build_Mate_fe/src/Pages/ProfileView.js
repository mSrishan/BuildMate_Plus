import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import Phone from '../Components/Assets/phone-call(1).png';
import Email from '../Components/Assets/email(1).png';
import web from '../Components/Assets/web.png';
import star from '../Components/Assets/star.png';
import './ProfileView.css';
import closeIcon from "../Components/Assets/close.png";

const Review = ({ name, date, text }) => (
  <div className="review">
    <div className="review-header">
      <span className="review-name">{name}</span>
      <span className="review-date">{date}</span>
    </div>
    <p className="review-text">{text}</p>
    <div className="review-footer">
      {[...Array(5)].map((_, index) => (
        <img key={index} src={star} alt="star" className="review-star" />
      ))}
    </div>
  </div>
);

const ProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (location.state?.profile) {
          setProfile(location.state.profile);
        } else {
          const response = await axios.get(`http://localhost:8000/api/professionals/${id}`);
          setProfile(response.data);
        }
      } catch (error) {
        console.error('There was an error fetching the profile!', error);
      }
    };

    fetchProfileData();

    axios.get(`http://localhost:8000/api/reviews/${id}`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, [id, location.state?.profile]);

  const defaultText = {
    name: 'Your Name',
    profession: 'Your Profession',
    email: 'Your Email',
    location: 'Your Location',
    phone: 'Your Phone Number',
    linkedin: 'Your LinkedIn',
    website: 'Your Website',
    about: 'Short bio about yourself',
  };

      function handleClose() {
        navigate("/Pages/ProfileCards"); // Navigate to the home page
    }

  return (
    <div>
      <div className='Archi-nav' style={{ backgroundColor: '#FF6B00' }}>
      </div>
      <h1 className='mainTopic'>Profile</h1>
      <div className="cls-btn"><img src={closeIcon} alt="Close" className="close-icon" onClick={handleClose} />
        </div>
        <div className="profile-container01">
          <div className="prof-image">
            <img src={`http://localhost:8000/${profile.profilePicture}`} alt="Profile" />
          </div>
          <div className='pro-mainTopic'>
            <div className='pro-name'>{profile.name || <span className="default-text">{defaultText.name}</span>}</div>
            <div className='pro-profession'>{profile.profession || <span className="default-text">{defaultText.profession}</span>}</div>
          </div>
          <div className='pro-links'>
            <img src={Email} alt='email' className='pro-Icon' />
            <p>{profile.email || <span className="default-text">{defaultText.email}</span>}</p>
          </div>
          <div className='pro-links'>
            <img src={linkedin} alt='linkedin' className='pro-Icon' />
            <p>{profile.linkedin || <span className="default-text">{defaultText.linkedin}</span>}</p>
          </div>
          <div className='pro-links'>
            <img src={Phone} alt='phone' className='pro-Icon' />
            <p>{profile.phone || <span className="default-text">{defaultText.phone}</span>}</p>
          </div>
          <div className='pro-links'>
            <img src={gps} alt='location' className='pro-Icon' />
            <p>{profile.location || <span className="default-text">{defaultText.location}</span>}</p>
          </div>
          <div className='pro-links'>
            <img src={web} alt='website' className='pro-Icon' />
            <p>{profile.website || <span className="default-text">{defaultText.website}</span>}</p>
          </div>
          <div className='pro-bio'>
            <p>{profile.bio || <span className="default-text">{defaultText.about}</span>}</p>
          </div>
          <div className='pro-buttonVersion'>
            <button className="message-button" onClick={() => navigate('/Components/ChatApp/App', { state: { profile } })}>Message</button>
          </div>
        </div>
    </div>
  );
};

export default ProfileView;
