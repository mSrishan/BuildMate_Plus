const express = require('express');
const router = express.Router();
const ContactUs = require('../models/ContactUs');

router.post('/api/contact', async (req, res) => {
    try {
        const { email, name, subject, message } = req.body;

        const newClient = new Client({ email, name, subject, message });
        await newClient.save();

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});

module.exports = router;
