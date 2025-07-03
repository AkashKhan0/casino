import React, { useState, useRef, useEffect } from 'react';
import chat from "../assets/chat.gif";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showField, setShowField] = useState(false);
    const messagesEndRef = useRef(null);

  const getFormattedDateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short", // "Jul"
      year: "numeric",
    });
    return { time, date };
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const { time, date } = getFormattedDateTime();

    const newMessage = {
      text: input,
      sender: "user",
      time,
      date,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

    // 🔽 Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <div className="chat" onClick={() => setShowField(!showField)}>
        <img src={chat} alt="" />
      </div>

      {showField && (
        <div className="feild">
          <h1 className='p-1 text-center text-xl font-semibold text-[#fcbd00]'>Customer support</h1>
        <div className="flex flex-col">
          {/* Chat Messages */}
          <div className="overflow-y-scroll chat_fld p-2 space-y-2 h-[340px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] w-fit flex flex-col ${
                  msg.sender === "user"
                    ? "bg-[#fcbd001c] text-white ml-auto text-left"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
                <span className="text-[10px] text-[#900089] text-right mt-1">
                  {msg.time} - {msg.date}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="form_inp rounded-lg flex gap-2 fixed bottom-0 left-0 w-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="w-full py-1 pl-2 outline-none bg-transparent"
            />
            <button onClick={handleSend} className="text-white px-4 py-2">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
      )}


      
    </div>
  );
};

export default Chat;
