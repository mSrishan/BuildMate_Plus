const express = require('express');
const router = express.Router();
const { Client, Professional, ServiceSupplier, MaterialSupplier } = require('../models/userModels');

router.get('/profile/:email', async (req, res) => {
    try {
        let user = await Professional.findOne({ email: req.params.email }) ||
                   await ServiceSupplier.findOne({ email: req.params.email }) ||
                   await MaterialSupplier.findOne({ email: req.params.email }) ||
                   await Client.findOne({ email: req.params.email });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
