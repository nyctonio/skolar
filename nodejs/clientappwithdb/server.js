const express = require('express');
const mongoose = require('mongoose');
const app = express();

// middleware every request will be passed through this middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGODB_URL = 'mongodb+srv://admin:1234@skolar.npibitv.mongodb.net/usersdb';

mongoose.connect(MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error while connecting to MongoDB');
});

// schema
const userSchema = new mongoose.Schema({
    name: String,
});

// model -  used to perform CRUD operations
const User = mongoose.model('user', userSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// CRUD Operations

// Create
app.post('/adduser', async (req, res) => {
    const username = req.body.name;
    // create a new user
    const user = new User({
        name: username
    });
    // saving the user to the database
    await user.save();
    res.send('User added successfully');
})

// Read
app.get('/getusers', async (req, res) => {
    try {
        const users = await User.find(); // return all the users
        res.send(users);
    } catch (err) {
        console.log(err);
        res.send('Error while getting users');
    }
})

// Update
app.post('/update', async (req, res) => {
    try {
        const username = req.body.name;
        await User.updateOne({ name: username }, { name: 'Ritesh Kumar' });
        res.send('User updated successfully');
    } catch (err) {
        console.log(err);
        res.send('Error while updating user');
    }
});

// Delete
app.delete('/delete', async (req, res) => {
    try {
        console.log(req.body);
        const username = req.body.name;
        await User.deleteOne({ name: username });
        res.send('User deleted successfully');
    } catch (err) {
        console.log(err);
        res.send('Error while deleting user');
    }
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
})