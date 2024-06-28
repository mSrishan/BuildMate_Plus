import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ArchProfile.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import leftArrow from '../Components/Assets/left-arrow.png';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import web from '../Components/Assets/web.png';
import uploadIcon from '../Components/Assets/Archi-Porfolio.jpg';
import currentPro from '../Components/Assets/current-pro.jpg';
import star from '../Components/Assets/star.png';

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

const Profile = () => {
  const [reviews, setReviews] = useState([
    { name: 'John Doe', date: '2023-06-20', text: 'Great project! Highly recommend.' },
    { name: 'Jane Smith', date: '2023-06-18', text: 'Loved working with this team.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', date: '', text: '' });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.date && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', date: '', text: '' });
    }
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const location = useLocation();
  const { name, profession, profileImage, ratings, reviews: locationReviews } = location.state || {};

  return (
    <div>
      <div className='Archi-nav' style={{ backgroundColor: '#FF6B00' }}>
        <Navbar />
      </div>
      <button className="back-button" onClick={() => window.location.href = '/Pages/Architecture'}>
        <img src={leftArrow} alt="Back" />
      </button>
      <div className='profile'>
        <div className="profile-card">
          <div className="profile-header">
            <img src={profileImage || "https://via.placeholder.com/150"} alt={name} className="profile-image" />
            <div className="profile-info">
              <h1 className="profile-name01">{name || "Steve Rogers"}</h1>
              <h2 className="profile-role">{profession || "Architecture"}</h2>
              <div className="profile-rating">
                <span className="rating-score">{ratings || 4.3}</span>
                <span className="stars">★★★★☆</span>
                <span className="reviews">({locationReviews || 263} reviews)</span>
              </div>
              <div className="profile-rating">
                <img src={gps} alt='location' className='pro-Icon' onClick={() => window.location.href = 'https://www.google.com/maps'} />
                <img src={linkedin} alt='linkedin' className='pro-Icon' onClick={() => window.location.href = 'https://lk.linkedin.com/'} />
                <img src={web} alt='website' className='pro-Icon' onClick={() => window.location.href = 'https://www.google.com'} />
              </div>
              <div className="profile-buttons">
                <button className="message-button" onClick={() => window.location.href = '/Pages/Chat'}>Message</button>
              </div>
            </div>
          </div>
          <div className="profile-sections">
            <div className="section">
              <div className="section-content">
                <h3>Portfolio</h3>
                <button className="view-all">View All</button>
                <div className='main-devide-section'>
                  <div className='devide-section'>
                    <img src={uploadIcon} alt='portfolio' />
                    <img src={uploadIcon} alt='portfolio' />
                    <img src={uploadIcon} alt='portfolio' />
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-content">
                <h3>Current Projects</h3>
                <button className="view-all">View All</button>
                <div className='main-devide-section'>
                  <div className='devide-section'>
                    <img src={currentPro} alt='portfolio' />
                    <img src={currentPro} alt='portfolio' />
                    <img src={currentPro} alt='portfolio' />
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-content">
                <h3>Reviews</h3>
                <button className="view-all">View All</button>
                <div className='main-devide-section'>
                  <div className="reviews-container">
                    {reviews.map((review, index) => (
                      <Review key={index} name={review.name} date={review.date} text={review.text} />
                    ))}
                    <div className="new-review">
                      <h3>Add a New Review</h3>
                      <input
                        type="text"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="new-review-input"
                      />
                      <input
                        type="date"
                        name="date"
                        value={newReview.date}
                        onChange={handleInputChange}
                        className="new-review-input"
                      />
                      <textarea
                        name="text"
                        value={newReview.text}
                        onChange={handleInputChange}
                        placeholder="Your review"
                        className="new-review-input"
                      />
                      <button onClick={handleAddReview} className="add-review-button">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
