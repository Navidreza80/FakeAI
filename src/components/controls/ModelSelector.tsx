"use client";

import { Bot } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export type Model = "GPT-4" | "Claude 3" | "Gemini Pro" | "Llama 3";

const models: { id: Model; label: string }[] = [
  { id: "GPT-4", label: "GPT-4" },
  { id: "Claude 3", label: "Claude 3" },
  { id: "Gemini Pro", label: "Gemini Pro" },
  { id: "Llama 3", label: "Llama 3" },
];

interface ModelSelectorProps {
  currentSender: Model;
  setCurrentSender: React.Dispatch<React.SetStateAction<Model>>;
}

export function ModelSelector({
  currentSender,
  setCurrentSender,
}: ModelSelectorProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-3xl border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <Bot className="w-5 h-5" />
          AI Model
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          onValueChange={(value: Model) => setCurrentSender(value)}
          value={currentSender}
        >
          <SelectTrigger className="w-full bg-black/40 border-white/10 text-gray-200">
            <SelectValue placeholder="Select an AI model" />
          </SelectTrigger>
          <SelectContent className="bg-black">
            {models.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                <span className="flex items-center gap-2">{m.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
