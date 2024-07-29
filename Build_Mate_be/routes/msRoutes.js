const express = require('express');
const router = express.Router();
const multer = require('multer');
const Msdet = require('../models/msdet');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/registerMaterialSupplierDetails', upload.fields([{ name: 'profilePicture', maxCount: 1 }, { name: 'previousJobFile', maxCount: 1 }]), async (req, res) => {
    try {
        const { msdet, email, serviceAreaCoverage, linkedin, weblink, experience, workPlace, bio, typeOfMaterialsOffered, materialQualityStandards } = req.body;
        const profilePicture = req.files.profilePicture ? req.files.profilePicture[0].path : null;
        const previousJobFile = req.files.previousJobFile ? req.files.previousJobFile[0].path : null;

        const newMsdet = new Msdet({
            msdet,
            email,
            serviceAreaCoverage,
            linkedin,
            weblink,
            experience,
            workPlace,
            bio,
            typeOfMaterialsOffered,
            materialQualityStandards,
            profilePicture,
            previousJobFile
        });

        await newMsdet.save();

        res.status(201).json({ message: 'Material Supplier profile created successfully' });
    } catch (error) {
        console.error('Error in registerMaterialSupplierDetails:', error);
        res.status(500).json({ message: 'Error creating Material Supplier profile' });
    }
});

router.get('/materialSuppliers', async (req, res) => {
    try {
        const materialSuppliers = await Msdet.find();
        res.json(materialSuppliers);
    } catch (error) {
        console.error('Error in fetching material suppliers:', error);
        res.status(500).json({ message: 'Error fetching material suppliers' });
    }
});

module.exports = router;
