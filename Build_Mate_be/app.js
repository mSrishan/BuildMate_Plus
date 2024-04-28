const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const PORT = 8000;
// const bcrypt = require("bcrypt");

// MongoDB connection URI
const MONGO_URI = "mongodb://localhost:27017";
const DB_NAME = "Build_Mate_Signin";
const COLLECTION_NAME = "users";

app.use(express.json());
app.use(cors());

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);
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
            const data = { email, password, firstName, lastName}; // Use hashedPassword
            await collection.insertOne(data);
            res.json("notexist");
        }
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Error signing up" });
    }
});
// Handle user sign-in
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const collection = await connectToMongoDB();
        const user = await collection.findOne({ email });

        if (user) {
            // Compare the plain text password with the password stored in the database
            if (password === user.password) {
                res.json({ message: "success", user });
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
