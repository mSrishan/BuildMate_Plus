const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const Professional = require('../models/Professional');
const ServiceSupplier = require('../models/ServiceSupplier');
const MaterialSupplier = require('../models/MaterialSupplier');

router.post('/registerClient', async (req, res) => {
    const { email, name, gender, address, phoneNumber, country, birthdayDate, birthdayMonth, birthdayYear, userType, agreeTerms } = req.body;
    
    try {
        let user;
        switch (userType) {
            case 'client':
                user = new Client({ email, name, gender, address, phoneNumber, country, birthdayDate, birthdayMonth, birthdayYear, agreeTerms });
                break;
            case 'professional':
                user = new Professional({ email, name, gender, address, phoneNumber, country, birthdayDate, birthdayMonth, birthdayYear, agreeTerms });
                break;
            case 'service supplier':
                user = new ServiceSupplier({ email, name, gender, address, phoneNumber, country, birthdayDate, birthdayMonth, birthdayYear, agreeTerms });
                break;
            case 'material supplier':
                user = new MaterialSupplier({ email, name, gender, address, phoneNumber, country, birthdayDate, birthdayMonth, birthdayYear, agreeTerms });
                break;
            default:
                return res.status(400).send({ message: 'Invalid user type' });
        }

        await user.save();
        res.status(201).send({ message: 'Registration details added and client status updated successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving information', error });
    }
});

module.exports = router;
