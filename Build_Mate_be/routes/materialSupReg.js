// routes/materialSupReg.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const MaterialSup = require('../models/materialSup'); // Ensure this path is correct

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'previousJobFile', maxCount: 1 }
]), async (req, res) => {
    const { name, profession, address, phoneNumber, linkedin, weblink, experience, workPlace, bio, skillLevel, jobCost } = req.body;
    const profilePicture = req.files['profilePicture'][0].path;
    const previousJobFile = req.files['previousJobFile'] ? req.files['previousJobFile'][0].path : null;

    try {
        // Create new material supplier
        const materialSup = new MaterialSup({
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
            profilePicture,
            previousJobFile
        });

        await materialSup.save();
        res.status(201).json({ message: "Material Supplier registered successfully" });
    } catch (error) {
        console.error("Error registering material supplier:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
