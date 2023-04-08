const express = require('express')
const app = express();
const http = require('http'); // in built no need to install this module
const server = http.createServer(app);
// this is socket server
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

// 5173  application

// 3000  application (add configuration to allow port 5173)

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

let client_count = 1;
// on -> listening      emit -> speaking 
io.on('connection', (socket) => {
    console.log(`a user connected ${client_count++}`);
    socket.emit('message', 'Welcome to chat app from skolar');
    socket.on('listen-server', (data) => {
        console.log(data);
    })
    socket.on('disconnecting', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log('Server is running on port 3000')
})
