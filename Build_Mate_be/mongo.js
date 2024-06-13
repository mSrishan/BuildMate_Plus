const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    const uri = process.env.MONGO_URI;
    console.log('MONGO_URI:', uri); // Log the MONGO_URI

    if (!uri) {
        throw new Error('MONGO_URI environment variable is not set.');
    }

    try {
        await mongoose.connect(uri); // No options needed for the latest versions
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectToMongoDB;
