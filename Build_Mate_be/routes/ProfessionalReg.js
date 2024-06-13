const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const router = express.Router();


const Professional = require('../models/Professional'); // Assuming Professional is a Mongoose model

const upload = multer({ dest: 'uploads/' });

router.post('/professionalReg', upload.single('profilePicture'), async (req, res) => {
  try {
    const { email, name, profession, address, phoneNumber, linkedin, weblink, experience, workPlace, bio, skillLevel, jobCost } = req.body;

    const professional = new Professional({
      email,
      name,
      profession,
      address,
      phoneNumber,
      linkedin,
      weblink,
      experience,
      workPlace,
      bio,
      skillLevel,
      jobCost,
      profilePicture: req.file ? req.file.path : null
    });

   

    await professional.save();
    res.status(201).send('Professional registered successfully');
  } catch (error) {
    console.error('Error creating professional profile:', error);
    res.status(400).send(`Error creating professional profile: ${error.message}`);
  }
});

module.exports = router;
