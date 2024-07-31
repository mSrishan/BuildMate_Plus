// backend/models/ssdet.js

const mongoose = require('mongoose');

const SsdetSchema = new mongoose.Schema({
    ssdet: { type: String, required: true },
    email: { type: String, required: true },
    TypeOfService: { type: String, required: true },
    linkedin: { type: String, required: true },
    weblink: { type: String },
    FieldExperience: { type: String },
    companyName: { type: String, required: true },
    bio: { type: String, required: true },
    numberOfWorkers: { type: String, required: true },
    priceStructure: { type: String, required: true },
    profilePicture: { type: String },
    previousJobFile: { type: String }
});

module.exports = mongoose.model('Ssdet', SsdetSchema);