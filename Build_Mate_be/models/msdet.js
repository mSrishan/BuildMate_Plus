// backend/models/msdet.js

const mongoose = require('mongoose');

const MsdetSchema = new mongoose.Schema({
    msdet: { type: String, required: true },
    email: { type: String, required: true },
    TypeOfMaterials: [String],
    linkedin: { type: String },
    weblink: { type: String },
    coveringArea: { type: String },
    companyName: { type: String, required: true },
    bio: { type: String, required: true },
    qualityOfMaterials: { type: String, required: true },
    profilePicture: { type: String }, // URL or path to the uploaded file
    previousJobFile: { type: String } // URL or path to the uploaded file
});

module.exports = mongoose.model('Msdet', MsdetSchema);
