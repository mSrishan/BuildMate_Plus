// models/userModels.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    birthdayDate: {
        type: String,
        required: true,
    },
    birthdayMonth: {
        type: String,
        required: true,
    },
    birthdayYear: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    agreeTerms: {
        type: Boolean,
        required: true,
    },
    isNewUser: {
        type: Boolean,
        default: true,
    },
});

const Client = mongoose.model('Client', userSchema);
const Professional = mongoose.model('Professional', userSchema);
const ServiceSupplier = mongoose.model('ServiceSupplier', userSchema);
const MaterialSupplier = mongoose.model('MaterialSupplier', userSchema);

module.exports = {
    Client,
    Professional,
    ServiceSupplier,
    MaterialSupplier,
};
