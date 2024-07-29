const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'buildmateplus@gmail.com',
        pass: 'wgln wrwl xeiw jsxq'
    }
});

// Function to send a welcome email
async function sendWelcomeEmail(email, firstName, userType) {
    const mailOptions = {
        from: 'buildmateplus@gmail.com',
        to: email,
        subject: 'Welcome to BuildMate+!',
        html: `
            <p>Hello ${firstName},</p>
            <p>Welcome to the BuildMate+ family!  We're thrilled to have you on board and excited for you to explore the endless possibilities our platform offers.</p>
            
            <p>At BuildMate+, we're committed to making your construction projects smoother, more efficient, and enjoyable. Whether you're a professional builder, a DIY enthusiast, or someone planning their dream home, we're here to support you every step of the way.</p>
            
            <h3>Here's What You Can Do with BuildMate+:</h3>
            <ul>
                <li><strong>Find Top Professionals:</strong> Connect with experienced professionals in your area who are ready to bring your vision to life.</li>
                <li><strong>Manage Projects Seamlessly:</strong> Keep track of your project milestones, budgets, and timelines with our intuitive tools.</li>
                <li><strong>Access Expert Advice:</strong> Get tips, tutorials, and advice from industry experts to help you with every aspect of your project.</li>
                <li><strong>Showcase Your Work:</strong> Share photos and details of your completed projects and get inspired by the community.</li>
            </ul>

            <h3>Getting Started is Easy!</h3>
            <ol>
                <li><strong>Complete Your Profile:</strong> Help us get to know you better so we can tailor our recommendations to your needs.</li>
                <li><strong>Explore Our Resources:</strong> Check out our library of articles, videos, and guides designed to assist you in every phase of your project.</li>
                <li><strong>Connect and Collaborate:</strong> Join our forums, connect with professionals, and start planning your next big project!</li>
            </ol>

            <p><strong>Need Help?</strong></p>
            <p>Our dedicated support team is here for you. If you have any questions or need assistance, don't hesitate to reach out to us at <a href="mailto:support@buildmateplus.com">support@buildmateplus.com</a>.</p>
            
            <p>Stay connected with us on social media to stay updated with the latest news, tips, and success stories from the BuildMate+ community:</p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>

            <p>Thank you for choosing BuildMate+. We can't wait to see what you'll create!</p>

            <p>Best regards,<br>The BuildMate+ Team</p>

            <p><strong>Website:</strong> <a href="http://www.buildmateplus.com">www.buildmateplus.com</a></p>
            <p><strong>Email:</strong> <a href="buildmateplus@gmail.com">support@buildmateplus.com</a></p>
        `
    };

    await transporter.sendMail(mailOptions);
}

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).send("exist");
        }
        const newUser = new User({ email, password, firstName, lastName });
        await newUser.save();

        // Send signup confirmation email
        try {
            await sendWelcomeEmail(email, firstName);
            res.status(201).json({ message: "notexist", firstName });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Error sending signup confirmation email" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: "success", firstName: user.firstName });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
