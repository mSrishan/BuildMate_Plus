const mongoose = require('mongoose');

const msdetSchema = new mongoose.Schema({
    msdet: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    serviceAreaCoverage: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    weblink: {
        type: String,
    },
    experience: {
        type: String,
        required: true,
    },
    workPlace: {
        type: String,
    },
    bio: {
        type: String,
        required: true,
    },
    typeOfMaterialsOffered: {
        type: String,
        required: true,
    },
    materialQualityStandards: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    previousJobFile: {
        type: String,
    },
});

const Msdet = mongoose.model('Msdet', msdetSchema);

module.exports = Msdet;
