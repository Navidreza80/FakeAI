"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Plus } from "lucide-react";

export function MessageEditor({ messages, setMessages, currentSender }) {
  return (
    <Card className="bg-white/5 backdrop-blur-3xl border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-200">
          <MessageSquare className="w-5 h-5" />
          Compose Messages
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((item) => (
          <div key={item.id} className="space-y-2">
            <label className="text-sm text-gray-400">{item.sender}</label>
            <Textarea
              onChange={(e) =>
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === item.id ? { ...msg, text: e.target.value } : msg
                  )
                )
              }
              placeholder="Type user message..."
              defaultValue={item.text}
              className="min-h-[80px] bg-black/40 border-white/10 text-gray-200"
            />
          </div>
        ))}
        <Button
          onClick={() =>
            setMessages((prev) => [
              ...prev,
              { id: Date.now(), sender: currentSender, text: "" },
            ])
          }
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Message
        </Button>
      </CardContent>
    </Card>
  );
}
