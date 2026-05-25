"use client";

import { useState } from "react";

export default function ChatPage() {

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {

    if (!message) return;

    try {

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await res.json();

      setResponse(data.response);

    } catch (error) {
      console.log(error);
      setResponse("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>GuardianX AI Chat</h1>

      <textarea
        rows={5}
        cols={50}
        placeholder="Type emergency..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={sendMessage}>
        Send
      </button>

      <br /><br />

      <h3>AI Response:</h3>

      <div>
        {response}
      </div>

    </div>
  );
}