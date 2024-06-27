import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import Phone from '../Components/Assets/phone-call(1).png';
import Email from '../Components/Assets/email(1).png';
import web from '../Components/Assets/web.png';
import uploadIcon from '../Components/Assets/cloud-computing.png'; // Add upload icon
import './ProfProfile.css';
import axios from 'axios';
import star from '../Components/Assets/star.png';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    { name: 'John Doe', date: '2023-06-20', text: 'Great project! Highly recommend.' },
    { name: 'Jane Smith', date: '2023-06-18', text: 'Loved working with this team.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', date: '', text: '' });
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    profession: '',
    email: '',
    location: '',
    phone: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    website: '',
    about: '',
    profilePicture: '', // State to hold profile picture URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Function to handle profile picture upload
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0]; // Assuming single file selection
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    axios.post('/api/profile', profile)
      .then(response => {
        setEditing(false);
        alert('Profile saved successfully');
      })
      .catch(error => {
        console.error('There was an error saving the profile!', error);
      });
  };

  return (
    <div>
      <div className='Archi-nav' style={{ backgroundColor: '#FF6B00' }}>
        <Navbar />
      </div>
      <h1 className='mainTopic'>Profile</h1>
      <div className="profile-container">
        <div className="profile-container01">
          <div className="prof-image" onClick={() => document.getElementById('profilePictureInput').click()}>
            {profile.profilePicture ? (
              <img src={profile.profilePicture} alt="Profile" />
            ) : (
              <div className='prof-imageUpload'>
                <img src={uploadIcon} alt="Upload" />
                <p>Upload your image</p>
              </div>
            )}
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleProfilePictureUpload}
            />
          </div>

          <div className='pro-mainTopic'>
            <div className='pro-name'>Jane Smith</div>
            <div className='pro-profession'>Architecture</div>
          </div>
          <div className='pro-links'>
            <img src={Email} alt='email' className='pro-Icon' />
            <p>johndoe@example.com</p>
          </div>
          <div className='pro-links'>
            <img src={linkedin} alt='linkedin' className='pro-Icon' />
            <p>linkedin.com/in/johndoe</p>
          </div>
          <div className='pro-links'>
            <img src={Phone} alt='phone' className='pro-Icon' />
            <p>0123456789</p>
          </div>
          <div className='pro-links'>
            <img src={gps} alt='location' className='pro-Icon' />
            <p>New York, USA</p>
          </div>
          <div className='pro-links'>
            <img src={web} alt='website' className='pro-Icon' />
            <p>http://www.johndoe.com</p>
          </div>
          <div className='pro-bio'>
            <p>Creative architect with a passion for blending form, function, and sustainability. Dedicated to designing spaces that inspire and enrich lives. Constantly seeking innovative solutions to complex design challenges.</p>
          </div>
          <div className='pro-buttonVersion'>
            <button className="message-button" onClick={() => navigate('/Pages/EditProfile')}>Edit Profile</button>
            <button className="message-button" onClick={() => window.location.href = '/Pages/ArchProfile'}>Public Profile</button>
          </div>
        </div>
        <div className="profile-container02">
          <div className='profileBox01'>
            <div className='profMiniBox'>
              <h2>1</h2>
              <p>level</p>
            </div>
            <div className='profMiniBox'>
              <h2>2</h2>
              <p>Job Ongoing</p>
            </div>
            <div className='profMiniBox'>
              <h2>25</h2>
              <p>Job Done</p>
            </div>
          </div>
          <div className='profileBox01'>
            <div className='profMiniBox3'>
              <p>Total Earning</p>
              <h2>7500.00$</h2>
            </div>
          </div>
          <div className='profileBox02'>
            <h2>Ongoing Project</h2>
            <div className='profMiniBox1'>
              <div className='profMiniBox'>
                <h4>Customer<br /> <span>Michel Stark</span></h4>
                <p>Gampaha, Sri Lanka</p>
                <div className='profMiniBox2'>
                  <p>Time<br />Remaining</p>
                  <h3><span>:21</span>hr</h3>
                </div>
              </div>
              <div className='profMiniBox'>
                <h4>Customer<br /><span>Michel Stark</span></h4>
                <p>Gampaha, Sri Lanka</p>
                <div className='profMiniBox2'>
                  <p>Time<br />Remaining</p>
                  <h3><span>:21</span>hr</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='profileBox02'>
            <h2>Feedbacks</h2>
            <div className="reviews-container">
              {reviews.map((review, index) => (
                <Review key={index} name={review.name} date={review.date} text={review.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
