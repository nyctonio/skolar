import { useState, useEffect, useRef } from "react";
import initSocket from "../lib/socket";
import "./App.css";

// backend nodejs
// socket.io
// react for the ui

function App() {
  const socketRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const init = async () => {
      const socket = await initSocket();
      socketRef.current = socket;
      socketRef.current.on("connect", () => {
        console.log("user you are connected");
      });
      socketRef.current.on("message", (message) => {
        const recivedMessage = {
          type: "recived",
          message,
        };
        setMessages((messages) => [...messages, recivedMessage]);
      });
    };
    init();
  }, []);

  const sendMessage = () => {
    const sentMessage = {
      type: "sent",
      message,
    };
    setMessages((messages) => [...messages, sentMessage]);
    socketRef.current.emit("message", message);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div style={{}}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              color: message.type === "sent" ? "#000" : "#000",
              justifyContent:
                message.type === "sent" ? "flex-end" : "flex-start",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                background: message.type === "sent" ? "#dcf8c6" : "#fff",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "60%",
              }}
            >
              {message.message}
            </div>
          </div>
        ))}
        <div
          style={{
            width: "500px",
            display: "flex",
          }}
        >
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{
              padding: "10px 4px",
              width: "100%",
              fontSize: "1.2rem",
            }}
            type="text"
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "15px 25px",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
