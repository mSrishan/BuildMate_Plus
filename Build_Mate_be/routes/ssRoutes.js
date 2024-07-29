// backend/routes/ssRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Ssdet = require('../models/ssdet');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/ss/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Register a new service supplier
router.post('/registerServiceSupplierDetails', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'previousJobFile', maxCount: 1 }
]), async (req, res) => {
    try {
        const { ssdet, email, TypeOfService, linkedin, weblink, FieldExperience, companyName, bio, numberOfWorkers, priceStructure } = req.body;
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
        const previousJobFile = req.files['previousJobFile'] ? req.files['previousJobFile'][0].path : null;

        const newSsdet = new Ssdet({
            ssdet,
            email,
            TypeOfService,
            linkedin,
            weblink,
            FieldExperience,
            companyName,
            bio,
            numberOfWorkers,
            priceStructure,
            profilePicture,
            previousJobFile
        });

        await newSsdet.save();

        res.status(201).json({ message: 'Service supplier registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering service supplier', error: error.message });
    }
});
router.get('/serviceSuppliers', async (req, res) => {
    try {
        const serviceSuppliers = await Ssdet.find({});
        res.status(200).json(serviceSuppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service suppliers', error: error.message });
    }
});


module.exports = router;
