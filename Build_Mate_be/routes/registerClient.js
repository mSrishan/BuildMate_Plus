// routes/registration.js
const express = require('express');
const router = express.Router();
const { Client, Professional, ServiceSupplier, MaterialSupplier } = require('../models/userModels');

router.post('/registerClient', async (req, res) => {
    const {
        email,
        firstName,
        lastName,
        gender,
        address,
        phoneNumber,
        country,
        birthdayDate,
        birthdayMonth,
        birthdayYear,
        userType,
        agreeTerms
    } = req.body;

    if (!email || !firstName || !lastName || !gender || !address || !phoneNumber || !country || !birthdayDate || !birthdayMonth || !birthdayYear || !userType || !agreeTerms) {
        return res.status(400).json({ message: "Please fill in all required fields" });
    }

    try {
        let userModel;

        switch (userType) {
            case 'client':
                userModel = Client;
                break;
            case 'professional':
                userModel = Professional;
                break;
            case 'service supplier':
                userModel = ServiceSupplier;
                break;
            case 'material supplier':
                userModel = MaterialSupplier;
                break;
            default:
                return res.status(400).json({ message: "Invalid user type" });
        }

        const newUser = new userModel({
            email,
            firstName,
            lastName,
            gender,
            address,
            phoneNumber,
            country,
            birthdayDate,
            birthdayMonth,
            birthdayYear,
            userType,
            agreeTerms
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error saving user: ", error);
        res.status(500).json({ message: "Error saving user information" });
    }
});

module.exports = router;
