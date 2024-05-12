import React, { useState } from 'react';
import axios from 'axios';
import './Expertreg.css'; // Import the CSS file

const RegisterExpert = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    expertise: '',
    experience: '',
    qualifications: '',
    agreement: false,
    photo: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post('http://localhost:8000/register-expert', formDataToSend);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="form-container">
      <h2>Register as an Expert</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Field of Expertise</label>
          <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Years of Experience</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Other Qualifications</label>
          <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
            I agree to the terms and conditions
          </label>
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input type="file" name="photo" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterExpert;