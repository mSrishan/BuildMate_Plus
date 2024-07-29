// backend/routes/aneDeiyaneRoutes.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AneDeiyane = require("../models/AneDeiyane"); // Adjusted import

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../src/images/")); // Adjust destination path as per your project structure
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Route to register professional details
router.post("/registerProfessionalDetails", upload.single("profilePicture"), async (req, res) => {
    try {
        console.log(req.body); // Log received data
        console.log(req.file); // Log uploaded file info
        const {
            email,
            name,
            profession,
            linkedin,
            weblink,
            experience,
            workPlace,
            bio,
            skillLevel,
            jobCost
        } = req.body;

        const profilePicture = req.file ? req.file.filename : null;

        const newAneDeiyane = new AneDeiyane({
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
            profilePicture
        });

        await newAneDeiyane.save();
        res.status(201).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error('Error in registerProfessionalDetails:', error);
        res.status(500).json({ message: 'Error updating profile' });
    }
});

module.exports = router;
