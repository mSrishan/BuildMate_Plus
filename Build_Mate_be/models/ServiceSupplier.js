const mongoose = require('mongoose');

const ServiceSupplierSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    birthdayDate: { type: String, required: true },
    birthdayMonth: { type: String, required: true },
    birthdayYear: { type: String, required: true },
    agreeTerms: { type: Boolean, required: true }
});

module.exports = mongoose.model('ServiceSupplier', ServiceSupplierSchema);
