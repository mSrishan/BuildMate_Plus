const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const app = express();
const PORT = 8000;

// MongoDB connection URI
const MONGO_URI = "mongodb://localhost:27017";
const DB_NAME = "Build_Mate";
const COLLECTION1= "Users";
const COLLECTION2 = "ContactUs";

const ContactUs = require("./mongo"); // Import ContactUs model

app.use(express.json());
app.use(cors());

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION1);
        return collection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

async function connectToMongoDBContact() {
    const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION2);
        return collection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

// Handle user sign-up
app.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName} = req.body;

    try {
        const collection = await connectToMongoDB();
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            // const hashedPassword = await bcrypt.hash(password, 10);
            const data = { email, password, firstName, lastName};
            await collection.insertOne(data);
            res.json("notexist");
        }
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Error signing up" });
    }
});

// GET method to retrieve user information
app.get("/user/:email", async (req, res) => {
    const userEmail = req.params.email;

    try {
        const collection = await connectToMongoDB();
        const user = await collection.findOne({ email: userEmail });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error retrieving user information:", error);
        res.status(500).json({ message: "Error retrieving user information" });
    }
});

// Handle user login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const collection = await connectToMongoDB();
        const user = await collection.findOne({ email });

        if (user) {
            console.log(password==user.password)
            if (password==user.password) {
                // Redirect to home page upon successful login
                console.log("success")
                res.json({message:"success"});
                // res.status(200).json({ message: "success" });
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Handle contact form submissions
app.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const collection = await connectToMongoDBContact();

            
            const data = { name, email, subject, message }; 
            await collection.insertOne(data);
            res.json({ message: "successfully sent message" });
        
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Error sending message" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
