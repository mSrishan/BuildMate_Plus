const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require('mongoose');

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const registrationRoute = require('./routes/registration');
const professionalRoutes = require("./routes/professionalRoutes");
const ssRoutes = require('./routes/ssRoutes');
const msRoutes = require('./routes/msRoutes')

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes); 
app.use('/api/registerClient', registrationRoute);
app.use('/api/registerProfessional', registrationRoute);
app.use('/api/registerServiceSupplier', registrationRoute);
app.use('/api/registerMaterialSupplier', registrationRoute);
app.use("/api", professionalRoutes);
app.use('/api', ssRoutes);
app.use('/api', msRoutes);


// Serve static files
app.use("/uploads/ProfileImages", express.static(path.join(__dirname, "uploads/ProfileImages")));
app.use("/uploads/Portfolios", express.static(path.join(__dirname, "uploads/Portfolios")));

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
