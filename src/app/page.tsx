"use client";

import { ExportPanel } from "@/components/controls/ExportPanel";
import { MessageEditor } from "@/components/controls/MessageEditor";
import { ModelSelector } from "@/components/controls/ModelSelector";
import ChatGPT from "@/components/models/ChatGPT/ChatGPT";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", text: "Hey AI, plan me a trip to Tokyo." },
    {
      id: 2,
      sender: "GPT-4",
      text: "Sure! Let’s create a 5-day itinerary for Tokyo 🎌.",
    },
  ]);
  const [currentSender, setCurrentSender] = useState("User");
  console.log(currentSender);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#101019] to-[#0D0D15] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Left Controls */}
        <div className="space-y-3 p-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            AI Snapshot Generator
          </h1>
          <p className="text-gray-400">
            Craft realistic AI chats and export as images
          </p>

          <ModelSelector
            currentSender={currentSender}
            setCurrentSender={setCurrentSender}
          />
          <MessageEditor
            currentSender={currentSender}
            messages={messages}
            setMessages={setMessages}
          />
          <ExportPanel />
        </div>

        {/* Right Chat Preview */}
        <ChatGPT messages={messages} />
      </div>
    </div>
  );
}
