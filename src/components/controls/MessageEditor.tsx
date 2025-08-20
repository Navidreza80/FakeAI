"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowDown,
  ArrowUp,
  Copy,
  MessageSquare,
  Plus,
  Trash2,
} from "lucide-react";
import React from "react";

interface Message {
  id: number;
  sender: string;
  text: string;
}

interface MessageEditorProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  currentSender: string;
}

export function MessageEditor({
  messages,
  setMessages,
  currentSender,
}: MessageEditorProps) {
  const handleAddMessage = () => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: currentSender, text: "" },
    ]);

    setTimeout(() => {
      const lastMessage = document.querySelector(
        ".message-item:last-child textarea"
      );
      if (lastMessage) {
        (lastMessage as HTMLElement).focus();
      }
    }, 50);
  };

  const handleDeleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleMoveMessage = (id: number, direction: "up" | "down") => {
    setMessages((prev) => {
      const index = prev.findIndex((msg) => msg.id === id);
      if (index === -1) return prev;

      if (direction === "up" && index === 0) return prev;
      if (direction === "down" && index === prev.length - 1) return prev;

      const newMessages = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      // Swap elements
      [newMessages[index], newMessages[targetIndex]] = [
        newMessages[targetIndex],
        newMessages[index],
      ];

      return newMessages;
    });
  };

  const handleDuplicateMessage = (id: number) => {
    setMessages((prev) => {
      const messageToDuplicate = prev.find((msg) => msg.id === id);
      if (!messageToDuplicate) return prev;

      const insertIndex = prev.findIndex((msg) => msg.id === id) + 1;
      const newMessages = [...prev];

      newMessages.splice(insertIndex, 0, {
        ...messageToDuplicate,
        id: Date.now(),
      });

      return newMessages;
    });
  };

  return (
    <Card className="bg-white/5 backdrop-blur-3xl border border-white/10 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-gray-200">
          <MessageSquare className="w-5 h-5" />
          Conversation Builder
          <span className="ml-2 text-xs font-normal bg-white/10 px-2 py-1 rounded-full">
            {messages.length} {messages.length === 1 ? "message" : "messages"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No messages yet. Start building your conversation!</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {messages.map((item, index) => (
              <div
                key={item.id}
                className="message-item group relative p-4 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.sender === "User" ? "bg-blue-500" : "bg-purple-500"
                      }`}
                    ></div>
                    <Select
                      value={item.sender}
                      onValueChange={(value: string) =>
                        setMessages((prev) =>
                          prev.map((msg) =>
                            msg.id === item.id ? { ...msg, sender: value } : msg
                          )
                        )
                      }
                    >
                      <SelectTrigger className="w-[120px] bg-black/40 border-white/10 text-gray-200">
                        <SelectValue placeholder="Select sender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="AI">AI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                      onClick={() => handleMoveMessage(item.id, "up")}
                      disabled={index === 0}
                    >
                      <ArrowUp className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                      onClick={() => handleMoveMessage(item.id, "down")}
                      disabled={index === messages.length - 1}
                    >
                      <ArrowDown className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                      onClick={() => handleDuplicateMessage(item.id)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-gray-400 hover:text-red-400 hover:bg-red-400/10"
                      onClick={() => handleDeleteMessage(item.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <Textarea
                  onChange={(e) =>
                    setMessages((prev) =>
                      prev.map((msg) =>
                        msg.id === item.id
                          ? { ...msg, text: e.target.value }
                          : msg
                      )
                    )
                  }
                  placeholder="Type message..."
                  value={item.text}
                  className="min-h-[80px] bg-black/40 border-white/10 text-gray-200 focus:border-white/20 transition-colors"
                />

                <div className="flex justify-between items-center mt-2">
                  <div className="text-xs text-gray-500">
                    {item.text.length} characters
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleAddMessage}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-all hover:shadow-lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Message
          </Button>

          {messages.length > 0 && (
            <Button
              variant="outline"
              onClick={() => setMessages([])}
              className="text-red-400 border-red-400/30 hover:bg-red-400/10 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
