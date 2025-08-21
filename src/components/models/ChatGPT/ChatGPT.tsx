import React, { forwardRef } from "react";
import Sidebar from "@/components/SVGs/Sidebar";
import ChatGPTInput from "./Input";
import Message from "./Message";
import Star from "@/components/SVGs/Star";
import Chat from "@/components/SVGs/Chat";

type MessageType = {
  text: string;
  id: number;
  sender: string;
};

const ChatGPT = forwardRef<HTMLDivElement, { messages: MessageType[] }>(
  ({ messages }, ref) => {
    return (
      <div
        ref={ref}
        className={`h-screen sticky top-10 mb-10 text-[#dcdbf6] bg-[#212121] flex flex-wrap flex-col ${
          messages ? "justify-start" : "justify-between"
        }`}
      >
        {/* ChatGPT Header */}
        <header className="px-2 py-2 flex items-center justify-between w-full">
          <span className="w-9 h-9 flex items-center justify-center">
            <Sidebar />
          </span>
          <button className="w-[161.07px] h-[35.99px] rounded-full bg-[#373669] font-semibold text-sm flex items-center justify-center gap-1">
            <Star />
            Upgrade your plan
          </button>
          <span className="w-9 h-9 flex items-center justify-center">
            <Chat />
          </span>
        </header>

        {!(messages.length > 0) && (
          <div className="text-3xl pb-9 w-full flex flex-wrap items-start justify-center px-4">
            <h1 className="mb-7">What&apos;s on your mind today?</h1>
            <ChatGPTInput />
          </div>
        )}

        <div className="w-full px-4 h-[calc(100%-120px)] overflow-y-scroll scroll-area overflow-x-hidden">
          {messages.map((item, index) => (
            <Message
              index={index}
              content={item.text}
              sender={item.sender}
              key={item.id}
            />
          ))}
        </div>

        {messages.length > 0 && (
          <div className="w-full absolute bottom-1 px-4">
            <ChatGPTInput />
            <footer className={`text-[12px] w-full text-center pt-1.5 `}>
              ChatGPT can make mistakes. Check important info. See
              <span className="ml-1 underline text-white">
                Cookie Preferences.
              </span>
            </footer>
          </div>
        )}
      </div>
    );
  }
);

ChatGPT.displayName = "ChatGPT";
export default ChatGPT;
