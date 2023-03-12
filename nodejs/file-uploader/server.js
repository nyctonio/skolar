const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cloudinary = require('cloudinary').v2;
// this will help us to get the env variables from .env file
const dotenv = require("dotenv");
dotenv.config();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const PORT = process.env.port;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single('file'), (req, res) => {
    const file = req.file;
    cloudinary.uploader.upload(file.path, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                message: "Error occured"
            })
        } else {
            return res.json({
                message: "File uploaded successfully",
                url: result.secure_url
            })
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});