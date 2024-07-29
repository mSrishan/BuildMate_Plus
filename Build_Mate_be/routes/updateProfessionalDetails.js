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

router.put('/updateProfessional/:id', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'previousJobFile', maxCount: 1 }
]), async (req, res) => {
    try {
        const { name, email, profession, linkedin, weblink, experience, workPlace, bio, skillLevel, jobCost } = req.body;
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
        const previousJobFile = req.files['previousJobFile'] ? req.files['previousJobFile'][0].path : null;

        const updatedProfDet = await ProfDet.findByIdAndUpdate(req.params.id, {
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
        }, { new: true });

        if (!updatedProfDet) {
            return res.status(404).json({ message: 'Professional details not found' });
        }

        res.json(updatedProfDet);
    } catch (error) {
        res.status(400).send({ message: 'Error updating profile', error });
    }
});

module.exports = router;
