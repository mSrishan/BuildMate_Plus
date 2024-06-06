const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buildmateplus@gmail.com',
        pass: 'buildmate+@2024'
    }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).send("exist");
        }
        const newUser = new User({ email, password, firstName, lastName });
        await newUser.save();

        // Send signup confirmation email
        try {
            await transporter.sendMail({
                from: 'buildmateplus@gmail.com',
                to: email,
                subject: 'Signup Confirmation',
                text: `Hello ${firstName},\n\nThank you for signing up!`
            });
            res.status(201).send("notexist");
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Error sending signup confirmation email" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: "success" });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
