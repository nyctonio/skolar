const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MONGODB_URL = 'mongodb+srv://admin:1234@skolar.npibitv.mongodb.net/usersdb';

mongoose.connect(MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error while connecting to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
});

const User = mongoose.model('user', userSchema);

app.get('/', (req, res) => {
    res.send('Hello Everyone from Express Server');
})


app.post('/adduser/:name', async (req, res) => {
    const username = req.params.name;
    const user = new User({
        name: username
    });
    await user.save();
    res.send('User added successfully');
})

app.listen(3005, () => {
    console.log('Server is running on port 3005');
})