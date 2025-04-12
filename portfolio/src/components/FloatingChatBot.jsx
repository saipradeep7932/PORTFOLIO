import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/ask", {
        question: trimmed,
      });
      setMessages((prev) => [...prev, { type: "bot", text: res.data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong." },
      ]);
    }
  };

  useEffect(() => {
    const toggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggleChatBot", toggle);
    return () => window.removeEventListener("toggleChatBot", toggle);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-800 transition"
      >
        💬 Chat
      </button>

      {isOpen && (
        <div
          className={`mt-2 w-80 p-4 rounded-xl shadow-2xl max-h-[500px] flex flex-col ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } border border-purple-300 transition-colors duration-300`}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-semibold">Resume Assistant</h4>
            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded hover:bg-purple-300"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Chat history */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-3 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Avatar */}
                {msg.type === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm">
                    🤖
                  </div>
                )}
                <div
                  className={`px-4 py-2 rounded-lg text-sm max-w-[70%] break-words ${
                    msg.type === "user"
                      ? "bg-purple-200 text-right"
                      : darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
                {/* User Avatar */}
                {msg.type === "user" && (
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
                    🧑
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input box */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a question..."
              className="flex-1 px-3 py-2 rounded border border-purple-300 text-sm focus:outline-purple-400"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-700 text-white px-4 rounded hover:bg-purple-800 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
