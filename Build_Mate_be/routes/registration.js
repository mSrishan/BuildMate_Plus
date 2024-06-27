const express = require('express');
const router = express.Router();
const { Client, Professional, ServiceSupplier, MaterialSupplier } = require('../models/userModels');
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pathumpasindu41@gmail.com',
        pass: 'lkoy tvyt vydf olny'
    }
});

// Function to send a welcome email
async function sendClientEmail(email, firstName, userType) {
    const mailOptions = {
        from: 'pathumpasindu41@gmail.com',
        to: email,
        subject: 'Welcome to BuildMate+!',
        html: `
            <p>Hello ${firstName},</p>
            <p>Welcome to BuildMate+!</p>
            <p>We're excited to have you as a registered ${userType}. You're now part of the BuildMate+ family, where we're committed to making your construction projects smoother, more efficient, and enjoyable.</p>
            
            <h3>What You Can Do as a ${userType}:</h3>
            <ul>
                <li><strong>Find Top Professionals:</strong> Connect with experienced professionals in your area who are ready to bring your vision to life.</li>
                <li><strong>Manage Projects Seamlessly:</strong> Keep track of your project milestones, budgets, and timelines with our intuitive tools.</li>
                <li><strong>Access Expert Advice:</strong> Get tips, tutorials, and advice from industry experts to help you with every aspect of your project.</li>
                <li><strong>Showcase Your Work:</strong> Share photos and details of your completed projects and get inspired by the community.</li>
            </ul>

            <p>We're here to support you every step of the way. If you have any questions or need assistance, don't hesitate to reach out to us at <a href="mailto:support@buildmateplus.com">support@buildmateplus.com</a>.</p>
            
            <p>Thank you for choosing BuildMate+! We're looking forward to seeing your projects come to life.</p>

            <p>Best regards,<br>The BuildMate+ Team</p>

            <p><strong>Website:</strong> <a href="http://www.buildmateplus.com">www.buildmateplus.com</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@buildmateplus.com">support@buildmateplus.com</a></p>
        `
    };

    await transporter.sendMail(mailOptions);
}

router.post('/', async (req, res) => {
    const {
        email,
        firstName,
        lastName,
        gender,
        address,
        phoneNumber,
        country,
        birthdayDate,
        birthdayMonth,
        birthdayYear,
        userType,
        agreeTerms
    } = req.body;

    if (!email || !firstName || !lastName || !gender || !address || !phoneNumber || !country || !birthdayDate || !birthdayMonth || !birthdayYear || !userType || !agreeTerms) {
        return res.status(400).json({ message: "Please fill in all required fields" });
    }

    try {
        let userModel;

        switch (userType) {
            case 'client':
                userModel = Client;
                break;
            case 'professional':
                userModel = Professional;
                break;
            case 'service supplier':
                userModel = ServiceSupplier;
                break;
            case 'material supplier':
                userModel = MaterialSupplier;
                break;
            default:
                return res.status(400).json({ message: "Invalid user type" });
        }

        const newUser = new userModel({
            email,
            firstName,
            lastName,
            gender,
            address,
            phoneNumber,
            country,
            birthdayDate,
            birthdayMonth,
            birthdayYear,
            userType,
            agreeTerms
        });

        await newUser.save();
        
        // Attempt to send the email
        try {
            await sendClientEmail(email, firstName);
        } catch (error) {
            console.error("Error sending email:", error);
            // Log the error, but continue to respond with success
        }

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error saving user: ", error);
        res.status(500).json({ message: "Error saving user information" });
    }
});

module.exports = router;
