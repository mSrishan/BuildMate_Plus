import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import women from '../Components/Assets/Home-women.png';
import './ImageGeneration.css';  // Import the CSS file
import Swal from 'sweetalert2';

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/generate-image', { prompt });
      setImageUrl(response.data.imageUrl);
      setError('');
    } catch (err) {
      console.error('Error generating image:', err.message);
      setError('Error generating image. Please try again.');
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    console.log(token !== '1234');

    if (token !== '1234') {
      Swal.fire({
        icon: 'warning',
        title: 'Access denied',
        
        footer: "You have to log in first",
        confirmButtonText: 'OK'
    });
      navigate('/Pages/home');
    }
  }, [navigate]);

  return (
    <div className='image-generator'>
      
      <img src={women} alt='woman' className='woman-img' />
    <div className="image-gen-wrapper">
      <h1 className='image-head'>Image Generator</h1>
      <h5>Unleash Your Imagination: Transform Words into Visual Art</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
          className="prompt-input-field"
        />
        <button type="submit" className="generate-btn">Generate Image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Generated" className="generated-image" />}
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
    </div>
    
  );
};

export default ImageGeneration;