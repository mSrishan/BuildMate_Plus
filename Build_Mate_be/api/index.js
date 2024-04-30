const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose= require("mongoose")


mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connect to MongoDb"))
.catch((err) => console.log(err))


app.listen("5000", ()=>{
    console.log("backend running")
})