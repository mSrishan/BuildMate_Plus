const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const rapidApiUrl = 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic';
const rapidApiKey = process.env.RAPIDAPI_KEY;

router.post('/', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(rapidApiUrl, 
      { inputs: prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
          'x-rapidapi-key': rapidApiKey
        }
      }
    );

    const imageUrl = response.data.url; // Ensure this matches the actual response

    res.json({ imageUrl });
  } catch (err) {
    console.error('Error generating image:', err.message);
    console.error('Stack trace:', err.stack);
    if (err.response) {
      console.error('Response data:', err.response.data);
      res.status(err.response.status || 500).send(err.response.data);
    } else {
      res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
  }
});

module.exports = router;
