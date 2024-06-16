import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { name, profession, profileImage, ratings, reviews } = location.state || {};

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profileImage || "https://via.placeholder.com/150"} alt={name} className="profile-image" />
        <div className="profile-info">
          <h1 className="profile-name">{name || "Steve Rogers"}</h1>
          <h2 className="profile-role">{profession || "Architecture"}</h2>
          <div className="profile-rating">
            <span className="rating-score">{ratings || 4.3}</span>
            <span className="stars">★★★★☆</span>
            <span className="reviews">({reviews || 263} reviews)</span>
          </div>
          <div className="profile-buttons">
            <button className="message-button">Message</button>
            <button className="contact-button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="profile-sections">
        <div className="section">
          <div className="section-content">
            <h3>Portfolio</h3>
            <button className="view-all">View All</button>
            <div className='main-devide-section'>
              <div className='devide-section'></div>
              <div className='devide-section'></div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h3>Current Projects</h3>
            <button className="view-all">View All</button>
            <div className='main-devide-section'>
              <div className='devide-section'></div>
              <div className='devide-section'></div>
              <div className='devide-section'></div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h3>Reviews</h3>
            <button className="view-all">View All</button>
            <div className='main-devide-section'>
              <div className='devide-section'></div>
              <div className='devide-section'></div>
              <div className='devide-section'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
