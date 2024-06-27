const express = require('express');
const router = express.Router();
const { Professional } = require('../models/userModels');

// Example route using Professional model
router.post('/registerProfessional', async (req, res) => {
    try {
        const { email, name, profession, linkedin, weblink, experience, workPlace, bio, skillLevel, jobCost, profilePicture, previousJobFile } = req.body;

        const newProfessional = new Professional({
            email,
            name,
            profession,
            linkedin,
            weblink,
            experience,
            workPlace,
            bio,
            skillLevel,
            jobCost,
            profilePicture,
            previousJobFile,
        });

        await newProfessional.save();

        res.status(201).json({ message: 'Professional registration successful' });
    } catch (error) {
        console.error('Error registering professional:', error);
        res.status(500).json({ message: 'Failed to register professional' });
    }
});

module.exports = router;
