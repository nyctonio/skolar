import { io } from 'socket.io-client'
const socketURL = "http://localhost:3000"

const initSocket = () => {
    return io(socketURL)
}

export default initSocket;
