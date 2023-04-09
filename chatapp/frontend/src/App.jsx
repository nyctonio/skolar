import { useState, useEffect, useRef } from "react";
import initSocket from "../lib/socket";
import "./App.css";

// backend nodejs
// socket.io
// react for the ui

function App() {
  // socketRef will be used to store the socket object
  const socketRef = useRef(null);
  // message state will be used to store the message that is being typed
  const [message, setMessage] = useState("");
  // messages state will be used to store all the messages that are being sent and received
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const init = async () => {
      // initSocket will return a promise that will resolve to the socket object
      const socket = await initSocket();
      // set the socket object to socketRef.current
      socketRef.current = socket;
      // listen for the connect event and log a message
      socketRef.current.on("connect", () => {
        console.log("user you are connected");
      });
      // whenever a message is received, add it to the messages state
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

  // the function to send a message
  const sendMessage = () => {
    const sentMessage = {
      type: "sent",
      message,
    };
    // add the sent message to the messages state
    setMessages((messages) => [...messages, sentMessage]);
    // emit the message event with the message as the payload (sending the message)
    socketRef.current.emit("message", message);
    // clear the message state
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div style={{}}>
        {/* here we are rendering the messages */}
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

        {/* input box and send button */}
        <div style={{ width: "500px", display: "flex" }}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{ padding: "10px 4px", width: "100%", fontSize: "1.2rem" }}
            type="text"
          />
          <button onClick={sendMessage} style={{ padding: "15px 25px" }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
