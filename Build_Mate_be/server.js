const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require('mongoose');

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const registrationRoute = require('./routes/registration');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/route/user", userRoutes);
app.use("/route/contact", contactRoutes); 
app.use('/route/registerClient', registrationRoute);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Build_Mate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
