const mongoose = require('mongoose');

const profDetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    profession: { type: String, required: true },
    linkedin: { type: String, required: true },
    weblink: { type: String },
    experience: { type: String, required: true },
    workPlace: { type: String, required: true },
    bio: { type: String, required: true },
    skillLevel: { type: String, required: true },
    jobCost: { type: String, required: true },
    profilePicture: { type: String },
    previousJobFile: { type: String }
});

const ProfDet = mongoose.model('ProfDet', profDetSchema);

module.exports = ProfDet;
