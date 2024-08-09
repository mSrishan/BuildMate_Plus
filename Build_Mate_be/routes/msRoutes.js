const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Msdet = require('../models/msdet');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/ms/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Register Material Supplier Details
router.post('/registerMaterialSupplierDetails', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'previousJobFile', maxCount: 1 }
]), async (req, res) => {
    try {
        const { msdet, email, TypeOfMaterials, linkedin, weblink, coveringArea, companyName, bio, qualityOfMaterials } = req.body;
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
        const previousJobFile = req.files['previousJobFile'] ? req.files['previousJobFile'][0].path : null;

        const newMsdet = new Msdet({
            msdet,
            email,
            TypeOfMaterials: JSON.parse(TypeOfMaterials),
            linkedin,
            weblink,
            coveringArea,
            companyName,
            bio,
            qualityOfMaterials,
            profilePicture,
            previousJobFile
        });

        await newMsdet.save();

        res.status(201).json({ message: 'Material supplier details saved successfully' });
    } catch (error) {
        console.error('Error saving material supplier details:', error);
        res.status(500).json({ message: 'Error saving material supplier details', error: error.message });
    }
});

// Get all material suppliers
router.get('/materialSuppliers', async (req, res) => {
    try {
        const materialSuppliers = await Msdet.find({});
        res.status(200).json(materialSuppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching material suppliers', error: error.message });
    }
});

// Search material suppliers
router.get('/materialSuppliers/search', async (req, res) => {
    try {
        const { query } = req.query;
        const users = await Msdet.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } },
                { TypeOfMaterials: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(users);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
