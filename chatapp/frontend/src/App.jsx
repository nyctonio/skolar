import { useState ,useEffect ,useRef } from 'react'
import initSocket from '../lib/socket';
import './App.css'

// backend nodejs 
// socket.io
// react for the ui

function App() {
  const socketRef = useRef(null);

  useEffect(() => {
    const init = async ()=>{
      const socket = await initSocket();
      socketRef.current = socket;
      socketRef.current.on('connect', () => {
        console.log('user you are connected');
      });
      socketRef.current.emit('listen-server','hi from frontend');
      socketRef.current.on('message', (data) => {
        console.log(data);
      });
    }
    init();
  },[]);

  return (
    <div className="App">
      Hello Socketio User
    </div>
  )
}

export default App
