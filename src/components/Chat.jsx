import React, { useState, useRef, useEffect } from 'react';
import chat from "../assets/chat.gif";
import { IoSend } from "react-icons/io5";
import { FaRegThumbsUp, FaPaperclip } from "react-icons/fa";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showField, setShowField] = useState(false);
  const messagesEndRef = useRef(null);

  const getFormattedDateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
    return { time, date };
  };

  const handleSend = (msg = input, type = "text", file = null) => {
    if (!msg && !file) return;

    const { time, date } = getFormattedDateTime();
    const newMessage = { text: msg, sender: "user", time, date, type, file };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      handleSend(file.name, "file", fileURL);
    }
  };

  // Auto-scroll when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Hide input if clicked outside

  return (
    <div>
      {/* Chat Icon */}
      <div className="chat" onClick={() => setShowField(!showField)}>
        <img src={chat} alt="" />
      </div>

      {/* Chat Field */}
      {showField && (
        <div className="feild overflow-hidden">
          <h1 className='p-1 text-center text-xl font-semibold text-[#000] bg-[#fcbd00]'>Customer Support</h1>

          <div className="flex flex-col">
            {/* Messages */}
            <div className="overflow-y-scroll chat_fld p-2 space-y-2 h-[340px]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md max-w-[80%] min-w-[200px] border w-fit flex flex-col group ${
                    msg.sender === "user"
                      ? "bg-[#fcbd001c] text-white ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.type === "file" ? (
                    <a
                      href={msg.file}
                      download
                      className="underline text-sm break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📎 {msg.text}
                    </a>
                  ) : msg.type === "emoji" ? (
                    <span className="text-2xl">{msg.text}</span>
                  ) : (
                    <span>{msg.text}</span>
                  )}
                  <span className="text-[10px] text-[#FCBD00] text-right">
                    {msg.time} - {msg.date}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="form_inp flex items-center gap-2 fixed bottom-0 left-0 w-full px-2 bg-black z-50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="w-full py-1 pl-2 outline-none bg-transparent placeholder-[#FCBD00] text-white"
              />

              {/* Attach File */}
              <label className="cursor-pointer text-[#FCBD00] text-md">
                <FaPaperclip />
                <input type="file" onChange={handleFileUpload} className="hidden" />
              </label>

              {/* Like Emoji */}
              <button onClick={() => handleSend("👍", "emoji")} className="text-md text-[#FCBD00] mx-2">
                <FaRegThumbsUp />
              </button>

              {/* Send */}
              <button onClick={() => handleSend()} className="text-[#FCBD00] text-md">
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
