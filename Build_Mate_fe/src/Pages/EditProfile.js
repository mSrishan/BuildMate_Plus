import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from './ProfileContext';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    axios.post('http://localhost:5000/api/profile', profile)
      .then(response => {
        alert('Profile saved successfully');
        navigate('/profile');
      })
      .catch(error => {
        console.error('There was an error saving the profile!', error);
      });
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="edit-profile-form">
        <label>Name</label>
        <input type="text" name="name" value={profile.name} onChange={handleInputChange} placeholder="Name" />

        <label>Profession</label>
        <input type="text" name="profession" value={profile.profession} onChange={handleInputChange} placeholder="Profession" />

        <label>Email</label>
        <input type="email" name="email" value={profile.email} onChange={handleInputChange} placeholder="Email" />

        <label>Location</label>
        <input type="text" name="location" value={profile.location} onChange={handleInputChange} placeholder="Location" />

        <label>Phone</label>
        <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} placeholder="Phone" />

        <label>Twitter</label>
        <input type="text" name="twitter" value={profile.twitter} onChange={handleInputChange} placeholder="Twitter" />

        <label>LinkedIn</label>
        <input type="text" name="linkedin" value={profile.linkedin} onChange={handleInputChange} placeholder="LinkedIn" />

        <label>Instagram</label>
        <input type="text" name="instagram" value={profile.instagram} onChange={handleInputChange} placeholder="Instagram" />

        <label>Website</label>
        <input type="text" name="website" value={profile.website} onChange={handleInputChange} placeholder="Website" />

        <label>About</label>
        <textarea name="about" value={profile.about} onChange={handleInputChange} placeholder="About"></textarea>

        <button type="button" onClick={handleSave}>Save Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
