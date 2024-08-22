import React, { useState } from 'react';
import axios from 'axios';
import './ImageGeneration.css';  // Import the CSS file

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div className='image-generate'>
      <div className="image-gen-wrapper">
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
    
  );
};

export default ImageGeneration;