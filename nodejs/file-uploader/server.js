const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");  // file system
const cloudinary = require('cloudinary').v2;
// this will help us to get the env variables from .env file
const dotenv = require("dotenv");
dotenv.config();

const fileUpload = require("express-fileupload");
app.use(fileUpload());
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const PORT = process.env.port;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const url = "https://images.unsplash.com/photo-1576103200868-2dd3eec3f333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"

app.post("/upload", async (req, res) => {
    console.log(url);
    const response = cloudinary.uploader.upload(url, { public_id: "olympic_flag" })
    response.then((data) => {
        console.log(data);
        console.log(data.secure_url);
    }).catch((err) => {
        console.log(err);
    });
    return res.send("Image uploaded successfully");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});