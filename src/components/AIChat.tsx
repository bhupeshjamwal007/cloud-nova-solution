"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bot, X, Send } from "lucide-react";

interface Message {
  text: string;
  sender: "bot" | "user";
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I am Cloud Nova Solution AI. Would you like me to create a website for you?", sender: "bot" },
  ]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let reply = "I am processing your request. Our team will reach out soon!";

      if (lowerText.includes("create") || lowerText.includes("build") || lowerText.includes("make a website")) {
        reply = "I'm on it! Preparing the cloud engine to build your dream website. Please provide some details about your industry or preferred style!";
      } else if (lowerText.includes("hi") || lowerText.includes("hello")) {
        reply = "Greetings! I am the Cloud Nova Solution AI. How can I assist you with your digital presence today?";
      }

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[999] flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={cn(
          "w-[320px] h-[400px] mb-[15px] flex-col overflow-hidden transition-all duration-300 ease-in-out transform origin-bottom-right rounded-2xl",
          "bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
          isOpen ? "flex opacity-100 scale-100 translate-y-0" : "hidden opacity-0 scale-95 translate-y-[20px] pointer-events-none"
        )}
      >
        <div className="bg-[#00e5ff]/10 p-4 flex justify-between items-center border-b border-white/10">
          <h3 className="m-0 text-lg text-[#00e5ff] font-bold">Cloud Nova Solution AI</h3>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/70">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "p-3 rounded-2xl text-sm max-w-[85%]",
                msg.sender === "bot" ? "bg-white/10 self-start rounded-bl-none" : "bg-[#00e5ff] text-black self-end rounded-br-none"
              )}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex p-4 border-t border-white/10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your request..."
            className="flex-1 bg-white/5 border border-white/20 text-white p-2 rounded-md outline-none focus:border-[#00e5ff]"
          />
          <button onClick={handleSend} className="bg-[#00e5ff] text-black px-4 ml-2 rounded-md font-bold hover:bg-white transition-colors">
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[60px] h-[60px] rounded-full bg-[#00e5ff] border-none cursor-pointer shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:shadow-[0_0_40px_rgba(0,229,255,1)] hover:scale-110 transition-all flex justify-center items-center text-3xl"
      >
        <Bot size={32} color="black" />
      </button>
    </div>
  );
}
