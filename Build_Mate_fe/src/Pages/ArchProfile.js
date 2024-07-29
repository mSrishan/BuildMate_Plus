import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArchProfile.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import leftArrow from '../Components/Assets/left-arrow.png';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import web from '../Components/Assets/web.png';
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
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', date: '', text: '' });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(`Fetching data for profile ID: ${id}`);
      axios.get(`http://localhost:8000/api/professional/${id}`)
        .then(response => {
          console.log('Profile data fetched:', response.data);
          setProfile(response.data);
          setReviews(response.data.reviews || []);
        })
        .catch(error => {
          console.error('Error fetching profile data:', error);
        });
    }
  }, [id]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.date && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', date: '', text: '' });

      // Optionally send new review to backend
      axios.post(`http://localhost:8000/api/addReview/${id}`, newReview)
        .catch(error => console.error('Error adding review:', error));
    }
  };



  return (
    <div>
      <div className='Archi-nav' style={{ backgroundColor: '#FF6B00' }}>
        <Navbar />
      </div>
      <button className="back-button" onClick={() => window.location.href = '/Pages/Architecture'}>
        <img src={leftArrow} alt="Back" />
      </button>
      <div className='profile'>
        {profile ? (
          <div className="profile-card">
            <div className="profile-header">
              <img src={`http://localhost:8000/${profile.profilePicture}`} alt={profile.name} className="profile-image" />
              <div className="profile-info">
                <h1 className="profile-name01">{profile.name}</h1>
                <h2 className="profile-role">{profile.profession}</h2>
                <div className="profile-rating">
                  <span className="rating-score">{profile.ratings || 4.3}</span>
                  <span className="stars">★★★★☆</span>
                  <span className="reviews">({reviews.length} reviews)</span>
                </div>
                <div className="profile-rating">
                  <img src={gps} alt='location' className='pro-Icon' onClick={() => window.location.href = profile.workPlace} />
                  <img src={linkedin} alt='linkedin' className='pro-Icon' onClick={() => window.location.href = profile.linkedin} />
                  <img src={web} alt='website' className='pro-Icon' onClick={() => window.location.href = profile.weblink} />
                </div>
                <div className="profile-buttons">
                  <button className="message-button" onClick={() => window.location.href = '/Pages/Chat'}>Message</button>
                </div>
              </div>
            </div>
            <div className="profile-content">
              <h3>Portfolio</h3>
              <a href={`http://localhost:8000/${profile.previousJobFile}`} download>Download Portfolio</a>
              {/* Add more sections as needed */}
            </div>
            <div className="profile-reviews">
              <h3>Reviews</h3>
              {reviews.map((review, index) => (
                <Review key={index} {...review} />
              ))}
              <div className="add-review">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={handleInputChange}
                />
                <input
                  type="date"
                  name="date"
                  value={newReview.date}
                  onChange={handleInputChange}
                />
                <textarea
                  name="text"
                  placeholder="Write your review"
                  value={newReview.text}
                  onChange={handleInputChange}
                ></textarea>
                <button onClick={handleAddReview}>Add Review</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
