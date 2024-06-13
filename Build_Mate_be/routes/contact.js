const express = require('express');
const router = express.Router();
const ContactUs = require('../models/ContactUs'); 

router.post('/', async (req, res) => {
    try {
        const { email, name, subject, message } = req.body;

        if (!email || !name || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContactMessage = new ContactUs({ email, name, subject, message });
        await newContactMessage.save();

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});

module.exports = router;
