const express = require('express');
const multer = require('multer');
const ProfDet = require('../models/profdet');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads/Portfolios';
        if (!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/registerProfessionalDetails', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'previousJobFile', maxCount: 1 }
]), async (req, res) => {
    try {
        const { name, email, profession, linkedin, weblink, experience, workPlace, bio, skillLevel, jobCost } = req.body;
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
        const previousJobFile = req.files['previousJobFile'] ? req.files['previousJobFile'][0].path : null;

        const newProfDet = new ProfDet({
            name,
            email,
            profession,
            linkedin,
            weblink,
            experience,
            workPlace,
            bio,
            skillLevel,
            jobCost,
            profilePicture,
            previousJobFile
        });

        await newProfDet.save();
        res.status(201).send({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error updating profile', error });
    }
});

router.get('/professionals', async (req, res) => {
    try {
        const professionals = await ProfDet.find({});
        res.json(professionals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch professional details by ID
router.get('/professionals/:id', async (req, res) => {
    try {
        const prof = await ProfDet.findById(req.params.id);
        if (!prof) {
            return res.status(404).json({ message: 'Professional not found' });
        }
        res.json(prof);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
