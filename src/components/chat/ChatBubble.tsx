"use client";
import { motion } from "framer-motion";

export function ChatBubble({ sender, text }: { sender: string; text: string }) {
  const isUser = sender === "User";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative max-w-[75%] px-4 py-3 rounded-2xl text-sm
          ${
            isUser
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
              : "bg-white/10 border border-white/10 text-gray-200 backdrop-blur"
          }
        `}
      >
        {text}
      </motion.div>
    </div>
  );
}
