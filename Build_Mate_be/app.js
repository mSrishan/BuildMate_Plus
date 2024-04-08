const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/signup", async (req, res) => {
    const { email, password, fullName, username, phoneNumber } = req.body;

    const data = {
        email: email,
        password: password,
        fullName: fullName,
        username: username,
        phoneNumber: phoneNumber
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            await collection.insertOne(data);
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// GET method to retrieve user information
app.get("/user/:email", async (req, res) => {
    const userEmail = req.params.email;

    try {
        const user = await collection.findOne({ email: userEmail });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
