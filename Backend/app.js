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

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
