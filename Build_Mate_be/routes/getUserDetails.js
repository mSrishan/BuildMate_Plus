// routes/getUserDetails.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModels');

router.get('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ email: user.email, firstName: user.firstName, lastName: user.lastName });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
