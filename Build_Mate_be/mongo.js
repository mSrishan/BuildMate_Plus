const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Build_Mate_Signin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
