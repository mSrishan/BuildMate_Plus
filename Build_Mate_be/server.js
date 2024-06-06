const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const registerRoutes = require("./routes/register");
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/registerClient", registerRoutes);  // Ensure this line is correct

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Build_Mate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
