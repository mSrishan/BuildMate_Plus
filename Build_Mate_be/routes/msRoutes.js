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

        res.status(201).json({ message: 'Material supplier registered successfully' });
    } catch (error) {
        console.error('Error registering material supplier:', error);  // Log the detailed error
        res.status(500).json({ message: 'Error registering material supplier', error: error.message });
    }
});


router.get('/materialSuppliers', async (req, res) => {
    try {
        const materialSuppliers = await Msdet.find({});
        res.status(200).json(materialSuppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service suppliers', error: error.message });
    }
});

module.exports = router;
